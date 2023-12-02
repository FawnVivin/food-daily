import { Injectable } from '@nestjs/common'
import { CreateConsumedProductDto, DailyStats } from '@food-daily/shared/types'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, MoreThanOrEqual, Repository } from 'typeorm'
import { ConsumedProduct } from '../models'
import { ProductsService } from '../../product/services'

@Injectable()
export class ConsumedProductsService {
  constructor(
    @InjectRepository(ConsumedProduct)
    private consumedProductRepository: Repository<ConsumedProduct>,
    private readonly productsService: ProductsService,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(consumedProductDto: CreateConsumedProductDto) {
    const newConsumedProduct = new ConsumedProduct(consumedProductDto)
    const {
      fats,
      proteins,
      carbohydrates,
      calories
    } = await this.productsService.findOneById(consumedProductDto.productId)
    const weightCoef = newConsumedProduct.weight / 100
    newConsumedProduct.fats = fats * weightCoef
    newConsumedProduct.proteins = proteins * weightCoef
    newConsumedProduct.carbohydrates = carbohydrates * weightCoef
    newConsumedProduct.calories = calories * weightCoef
    await this.entityManager.save(newConsumedProduct)
  }

  async remove(id: number) {
    await this.consumedProductRepository.delete(id)
  }

  async findOneById(id: number): Promise<ConsumedProduct> {
    return this.consumedProductRepository.findOne({ where: { id }, relations: ['productId'] })
  }

  async findAllByMeal(meal: ConsumedProduct['meal']): Promise<ConsumedProduct[]> {
    return this.consumedProductRepository.find({ where: { meal: meal }, relations: ['productId'] })
  }

  async updateWeight(id: number, weight: ConsumedProduct['weight']) {
    let newConsumedProduct = await this.consumedProductRepository.findOneBy({ id })
    const { fats, proteins, carbohydrates, calories } = await this.productsService.findOneById(newConsumedProduct.id)
    const weightCoef = weight / 100
    newConsumedProduct.weight = weight
    newConsumedProduct.fats = fats * weightCoef
    newConsumedProduct.proteins = proteins * weightCoef
    newConsumedProduct.carbohydrates = carbohydrates * weightCoef
    newConsumedProduct.calories = calories * weightCoef
    await this.entityManager.save(newConsumedProduct)
  }

  async getDailyStats(userId: number):Promise<DailyStats> {
    const date = new Date()
    const today = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate())
    const products = await this.consumedProductRepository.findBy({ user: { id: userId }, date: MoreThanOrEqual(today) })
    const caloriesSum = products.reduce((calories, product) => calories += product.calories, 0)
    const proteinsSum = products.reduce((proteins, product) => proteins += product.proteins, 0)
    const fatsSum = products.reduce((fats, product) => fats += product.fats, 0)
    const carbohydratesSum = products.reduce((carbohydrates, product) => carbohydrates += product.carbohydrates, 0)
    return {
      calories:caloriesSum,
      proteins:proteinsSum,
      carbohydrates:carbohydratesSum,
      fats:fatsSum
    }

  }
}
