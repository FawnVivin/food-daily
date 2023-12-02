import { Module } from '@nestjs/common';
import { ProductsService } from '../services'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from '../models'
import { ProductsController} from '../controllers'
import { ConsumedProduct } from '../../consumedProduct'


@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductModule {}
