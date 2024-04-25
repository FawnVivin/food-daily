import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Trainer } from "@food-daily/api/models";

import {  TrainersService } from "../services";
import { TrainersController } from "../controllers";

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  controllers: [TrainersController],
  providers: [TrainersService],
  exports: [TrainersService]
})
export class TrainerModule {
}
