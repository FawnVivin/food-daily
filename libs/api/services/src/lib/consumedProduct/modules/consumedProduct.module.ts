import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConsumedProduct, Product } from "@food-daily/api/models";

import { ConsumedProductsService } from "../services";
import { ConsumedProductsController } from "../controllers";
import { BaseProductModule } from "../../baseProduct/modules";


@Module({
  imports: [TypeOrmModule.forFeature([ConsumedProduct, Product]), BaseProductModule],
  controllers: [ConsumedProductsController],
  providers: [ConsumedProductsService]
})
export class ConsumedProductModule {
}
