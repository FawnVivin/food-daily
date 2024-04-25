import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { Trainer } from "@food-daily/api/models";

import type { TrainerDto } from "@food-daily/shared/types";


@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
    private readonly entityManager: EntityManager
  ) {
  }

  async findAll(): Promise<Trainer[]> {
    return this.trainerRepository.find({ relations: ["visitors"] });
  }

  async create(trainerDto:  TrainerDto) {
    const newTrainer = new Trainer(trainerDto);

    return await this.entityManager.save(newTrainer);
  }

  async findById(trainerId:number) {
  
    const trainer = await this.trainerRepository.findOne({
      where: {id: trainerId}, relations:["visitors"]});

     return trainer
  }

  async updateTrainer(trainerId:number, newTrainer: TrainerDto) {
      const trainer = await this.trainerRepository.findOneBy({ id:trainerId });

      trainer.name = newTrainer.name
      trainer.description = newTrainer.description

      await this.entityManager.save(trainer);

  }

  async remove(id: number) {
    await this.trainerRepository.delete(id);
  }

}
