import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { Trainer } from "@food-daily/api/models";

import type { TrainerDto } from "@food-daily/shared/types";


@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(trainerDto:  TrainerDto) {
    const newTrainer = new Trainer(trainerDto);

    await this.entityManager.save(newTrainer);
  }

  async findByUserId(userId:number) {
  
    const trainer = await this.trainerRepository.findOne({
      where: { user: { id:userId } }});

     return trainer
  }

  async updateTrainer(trainerId:number, newTrainer: TrainerDto) {
      let trainer = await this.trainerRepository.findOneBy({ id:trainerId });

      trainer = {...trainer, ...newTrainer}
      await this.entityManager.save(trainer);

  }
}
