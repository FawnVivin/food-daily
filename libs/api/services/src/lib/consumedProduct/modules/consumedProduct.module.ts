import { Module } from '@nestjs/common'
import { ConsumedProductsService } from '../services'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConsumedProduct } from '../models'
import { ConsumedProductsController } from '../controllers'
import { ProductModule } from '../../product'


@Module({
  imports: [TypeOrmModule.forFeature([ConsumedProduct]), ProductModule],
  controllers: [ConsumedProductsController],
  providers: [ConsumedProductsService]
})
export class ConsumedProductModule {
}
