import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { User } from "@food-daily/api/models";
import { Role } from "@food-daily/shared/types";

import type { CreateUserDto} from "@food-daily/shared/types";



@Injectable()
export class UsersService {
  constructor(
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
}
