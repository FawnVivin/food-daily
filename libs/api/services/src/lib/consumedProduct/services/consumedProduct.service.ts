import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, MoreThanOrEqual, Repository, Between } from "typeorm";
import { ConsumedProduct, Product, Visitor } from "@food-daily/api/models";
import { WeekLabels} from "@food-daily/shared/types";

import { BaseProductsService } from "../../baseProduct/services";

import { daysAgo } from "./helpers";

import type { CreateConsumedProductDto, DailyStats} from "@food-daily/shared/types";



@Injectable()
export class ConsumedProductsService {
  constructor(
    @InjectRepository(ConsumedProduct)
    private consumedProductRepository: Repository<ConsumedProduct>,
    private readonly entityManager: EntityManager,
    private readonly baseProductService: BaseProductsService
  ) {
  }

  async create(consumedProductDto: CreateConsumedProductDto) {
    const visitor = new Visitor({id:consumedProductDto.visitorId})
    const product = new Product({id:consumedProductDto.productId})
    const newConsumedProduct = new ConsumedProduct(consumedProductDto)

    newConsumedProduct.visitor = visitor
    newConsumedProduct.product = product
    const {
      fats,
      proteins,
      carbohydrates,
      calories
    } = await this.baseProductService.findOneById(consumedProductDto.productId);
    const weightCoef = newConsumedProduct.weight / 100;

    newConsumedProduct.fats = fats * weightCoef;
    newConsumedProduct.proteins = proteins * weightCoef;
    newConsumedProduct.carbohydrates = carbohydrates * weightCoef;
    newConsumedProduct.calories = calories * weightCoef;
    await this.entityManager.save(newConsumedProduct);
  }

  async remove(id: number) {
    await this.consumedProductRepository.delete(id);
  }

  async findOneById(id: number): Promise<ConsumedProduct> {
    return this.consumedProductRepository.findOne({ where: { id }, relations: ["product"] });
  }

  async findAllByMeal(meal: ConsumedProduct["meal"], visitorId: number): Promise<ConsumedProduct[]> {
    const date = new Date();
    const today = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate());

    return this.consumedProductRepository.find({
      where: { meal, visitor: { id: visitorId }, date: MoreThanOrEqual(today) },
      relations: ["product"]
    });
  }

  async updateWeight(id: number, weight: ConsumedProduct["weight"]) {
    const newConsumedProduct = await this.consumedProductRepository.findOne({ where:{id}, relations:['product'] });
    const {
      fats,
      proteins,
      carbohydrates,
      calories
    } = await this.baseProductService.findOneById(newConsumedProduct.product.id);
    const weightCoef = weight / 100;

    newConsumedProduct.weight = weight;
    newConsumedProduct.fats = fats * weightCoef;
    newConsumedProduct.proteins = proteins * weightCoef;
    newConsumedProduct.carbohydrates = carbohydrates * weightCoef;
    newConsumedProduct.calories = calories * weightCoef;
    await this.entityManager.save(newConsumedProduct);
  }

  async getDailyStats(visitorId: number, date?:Date): Promise<DailyStats> {
    const currentDate = date || new Date();
    const today = new Date(currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate());
    const products = await this.consumedProductRepository.find({
      where: {
        date: MoreThanOrEqual(today),
        visitor: { id: visitorId }
      }
    });
    const caloriesSum = products.reduce((calories, product) => calories += product.calories, 0);
    const proteinsSum = products.reduce((proteins, product) => proteins += product.proteins, 0);
    const fatsSum = products.reduce((fats, product) => fats += product.fats, 0);
    const carbohydratesSum = products.reduce((carbohydrates, product) => carbohydrates += product.carbohydrates, 0);

    return {
      calories: caloriesSum,
      proteins: proteinsSum,
      carbohydrates: carbohydratesSum,
      fats: fatsSum
    };
  }

  async getWeeklyStats(visitorId: number) {

    const dateFrom = daysAgo(7); 
    const dates = [];
    let currentDate = new Date()

    while (dateFrom < currentDate) {
        dates.push(new Date (currentDate));
        currentDate = daysAgo(1,currentDate);
    }

    const calories = []
    const proteins = []
    const fats = []
    const carbohydrates = []
    const products = await this.consumedProductRepository.find({where:{date: Between(dateFrom, new Date()), visitor: {id: visitorId}}})    
    const statsLabels = dates.map((date)=>WeekLabels[date.getDay()]).reverse()

    for (const date of dates.reverse()){
      const dateProducts = products.filter(({date: productDate})=>productDate.getDate() === date.getDate() && productDate.getMonth() === date.getMonth() && date.getFullYear === productDate.getFullYear)

      calories.push(dateProducts.reduce((calories, product) => calories += product.calories, 0))
      proteins.push(dateProducts.reduce((proteins, product) => proteins += product.proteins, 0))
      fats.push(dateProducts.reduce((fats, product) => fats += product.fats, 0))
      carbohydrates.push(dateProducts.reduce((carbohydrates, product) => carbohydrates += product.carbohydrates, 0))
    }

    return { 
        calories: {
          values: calories,
          labels: statsLabels
        }, 
        fats: {
          values: fats,
          labels: statsLabels
        }, 
        proteins: {
          values: proteins,
          labels: statsLabels
        },
        carbohydrates: {
          values: carbohydrates,
          labels: statsLabels
        }
      }

  }
}
