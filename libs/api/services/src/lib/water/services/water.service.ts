import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, MoreThanOrEqual, Repository } from "typeorm";
import { Visitor, Water } from "@food-daily/api/models";

import type { WaterDto } from "@food-daily/shared/types";


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
  async findByUserId(visitorId:number) {
    const date = new Date();
    const today = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate());
    const water = await this.waterRepository.findOne({
      where: { visitor: { id:visitorId } , date: MoreThanOrEqual(today) }});

    if (!water){
      const visitor = new Visitor({id:visitorId})
      const newWater = new Water({quantity:0, visitor });

      await this.entityManager.save(newWater);
      return newWater
    }

     return water
  }

  async updateQuantity(newQuantity: number, visitorId:number) {
    const date = new Date();
    const today = new Date(date.getFullYear(),
      date.getMonth(),
      date.getDate());
    const water = await this.waterRepository.findOne({
      where: { visitor: {id:visitorId} , date: MoreThanOrEqual(today) }});

      water.quantity = newQuantity;
      await this.entityManager.save(water);

  }
}
