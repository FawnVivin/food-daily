import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Water } from "@food-daily/api/models";

import {  WaterService } from "../services";
import { WaterController } from "../controllers";

@Module({
  imports: [TypeOrmModule.forFeature([Water])],
  controllers: [WaterController],
  providers: [WaterService]
})
export class WaterModule {
}
