import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ConsumedProductsService } from '../services'
import { ConsumedProduct } from '../models'
import { ConsumedProductsController } from '../controllers'



@Module({
  imports: [TypeOrmModule.forFeature([ConsumedProduct])],
  controllers: [ConsumedProductsController],
  providers: [ConsumedProductsService]
})
export class ConsumedProductModule {
}
