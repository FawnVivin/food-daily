import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository, Equal } from "typeorm";
import { User } from "@food-daily/api/models";
import { Role } from "@food-daily/shared/types";

import { VisitorsService } from "../../visitor";
import { TrainersService } from "../../trainer";

import type { CreateUserDto} from "@food-daily/shared/types";



@Injectable()
export class UsersService {
  constructor(
    private visitorsService: VisitorsService,
    private trainersService: TrainersService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly entityManager: EntityManager
  ) {
  }
  async findOne(email: string): Promise<User> {
    return this.userRepository.findOneBy({email});
  }

  async findOneById(id: number): Promise<User> {
    return this.userRepository.findOne({where:{id},relations:["trainer.visitors","visitor.products"]}) ;
  }

  async create(userDto: CreateUserDto, trainerId?:number, visitorId?:number) {
    const newUser = new User(userDto);

    if (trainerId){
      newUser.role = Role.Trainer
      newUser.trainer = trainerId
    }
    else if (visitorId){
      newUser.visitor = visitorId
    }

    await this.entityManager.save(newUser);
  }

  
  async removeVisitor(id: number) {
    const user = await this.userRepository.findOne({where:{visitor: Equal(id)}})

    await this.userRepository.delete(user.id);
    await this.visitorsService.remove(id);
  }

  async removeTrainer(id: number) {
    const user = await this.userRepository.findOne({where:{trainer: Equal(id)}})

    await this.userRepository.delete(user.id);
    await this.trainersService.remove(id);
  }
}
