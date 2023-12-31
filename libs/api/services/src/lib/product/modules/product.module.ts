import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "@food-daily/api/models";

import { ProductsService } from "../services";
import { ProductsController } from "../controllers";

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductModule {
}
