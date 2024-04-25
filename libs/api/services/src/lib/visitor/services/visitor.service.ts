import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { Visitor } from "@food-daily/api/models";


import { StatsHelper } from "./helpers";

import type { CreateVisitorDto, UpdateVisitorDto} from "@food-daily/shared/types";

@Injectable()
export class VisitorsService {
  constructor(
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
    private readonly entityManager: EntityManager
  ) {
  }

  async create(visitorDto: CreateVisitorDto) {
    const newVisitor = new Visitor(visitorDto);
    const [calories, proteinNorm, fatsNorm, carbohydrateNorm] = StatsHelper(visitorDto);

    newVisitor.calorieNorm = calories;
    newVisitor.proteinNorm = proteinNorm;
    newVisitor.fatsNorm = fatsNorm;
    newVisitor.carbohydrateNorm = carbohydrateNorm;
    return await this.entityManager.save(newVisitor);
  }

  async remove(id: number) {
    await this.visitorRepository.delete(id);
  }

  async update(id: number, newVisitor: UpdateVisitorDto) {
    const visitor = await this.visitorRepository.findOneBy({ id });
    const { age, sex, weight, height, target } = newVisitor;
    const [calories, proteinNorm, fatsNorm, carbohydrateNorm] = StatsHelper(newVisitor);

    visitor.calorieNorm = calories;
    visitor.proteinNorm = proteinNorm;
    visitor.fatsNorm = fatsNorm;
    visitor.carbohydrateNorm = carbohydrateNorm;
    visitor.age = age;
    visitor.sex = sex;
    visitor.weight = weight;
    visitor.height = height;
    visitor.target = target;
    // user = {...user,...newUser}
    await this.entityManager.save(visitor);
  }


  async findOneById(id: number): Promise<Visitor> {
    console.log(id)
    return await this.visitorRepository.findOne({
      where: {
        user:{id}
      }, relations:
        ["products", "user"]
    });
  }

  async findAll(): Promise<Visitor[]> {
    return this.visitorRepository.find({ relations: ["products"] });
  }
}
