import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "@food-daily/api/models";

import { BaseProductsService } from "../services";

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [BaseProductsService],
  exports: [BaseProductsService]
})
export class BaseProductModule {
}
