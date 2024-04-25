import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UsersService } from "../../user";
import { VisitorsService } from "../../visitor";
import { TrainersService } from "../../trainer";

import type { Payload } from "../types";
import type { CreateUserDto, CreateVisitorDto, TrainerDto, User } from "@food-daily/shared/types";


@Injectable()
export class AuthorizationService {
  constructor(
    private usersService: UsersService, 
    private visitorsService: VisitorsService,
    private trainersServise: TrainersService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === password) {
      return user;
    }

    throw new BadRequestException("Email or password is incorrect :(");
  }

  login(user: User) {
    const payload = { id: user.id, role: user.role, email: user.email };

    return {
      user,
      access_token: this.jwtService.sign(payload)
    };
  }

  async getUser({ id }: Payload) {
    return await this.usersService.findOneById(id);
  }

  async registration(user: CreateUserDto, trainerDto?: TrainerDto, visitorDto?: CreateVisitorDto) {

    if (trainerDto){
      const newTrainer = await this.trainersServise.create(trainerDto)

      await this.usersService.create(user, newTrainer.id);
    }
    else if (visitorDto){
      const newVisitor = await this.visitorsService.create(visitorDto)

      await this.usersService.create(user, undefined, newVisitor.id);
    }

  
    return {
      user,
      access_token: this.jwtService.sign({ user })
    };
  }
}
