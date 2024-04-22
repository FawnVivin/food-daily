import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Trainer } from "@food-daily/api/models";

import {  TrainerService } from "../services";
import { TrainerController } from "../controllers";

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  controllers: [TrainerController],
  providers: [TrainerService]
})
export class TrainerModule {
}
