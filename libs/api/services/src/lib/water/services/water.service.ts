import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, MoreThanOrEqual, Repository } from "typeorm";
import { Product, User, Water } from "@food-daily/api/models";
import { ProductStatus, WaterDto } from "@food-daily/shared/types";

import type { CreateProductDto } from "@food-daily/shared/types";

@Injectable()
export class WaterService {
  constructor(
    @InjectRepository(Water)
    private waterRepository: Repository<Water>,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(waterDto:  WaterDto) {
    const newWater = new Water(waterDto);

    await this.entityManager.save(newWater);
  }
  async findByUserId(userId:number) {
    const date = new Date();
    const today = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate());
    const water = await this.waterRepository.findOne({
      where: { user: { id:userId } , date: MoreThanOrEqual(today) }});
    if (!water){
      const user = new User({id:userId})
      const newWater = new Water({quantity:0, user });
      await this.entityManager.save(newWater);
      return newWater
    }
     return water
  }

  async updateQuantity(newQuantity: number, userId:number) {
    const date = new Date();
    const today = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate());
    const water = await this.waterRepository.findOne({
      where: { user: {id:userId} , date: MoreThanOrEqual(today) }});
      water.quantity = newQuantity;
      await this.entityManager.save(water);

  }
}
