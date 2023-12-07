import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { User } from "@food-daily/api/models";

import { StatsHelper } from "./helpers";

import type { CreateUserDto, UpdateUserDto } from "@food-daily/shared/types";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(userDto: CreateUserDto) {
    const newUser = new User(userDto);
    const [calories, proteinNorm, fatsNorm, carbohydrateNorm] = StatsHelper(userDto);

    newUser.calorieNorm = calories;
    newUser.proteinNorm = proteinNorm;
    newUser.fatsNorm = fatsNorm;
    newUser.carbohydrateNorm = carbohydrateNorm;
    await this.entityManager.save(newUser);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }

  async update(id: number, newUser: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    const { age, sex, weight, height, target } = newUser;
    const [calories, proteinNorm, fatsNorm, carbohydrateNorm] = StatsHelper(newUser);

    user.calorieNorm = calories;
    user.proteinNorm = proteinNorm;
    user.fatsNorm = fatsNorm;
    user.carbohydrateNorm = carbohydrateNorm;
    user.age = age;
    user.sex = sex;
    user.weight = weight;
    user.height = height;
    user.target = target;
    await this.entityManager.save(user);
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email
      }, relations:
        ["products"]
    });
  }

  async findOneById(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id
      }, relations:
        ["products"]
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ["products"] });
  }
}
