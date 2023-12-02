import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import {
  CreateConsumedProductDto,
  CreateProductDto, DailyStats,
  Product,
  UpdateConsumedProductDto,
  User as UserDto
} from '@food-daily/shared/types'
import { ConsumedProductsService } from '../services'
import { ConsumedProduct } from '../models'

@Controller('consumedProducts')
export class ConsumedProductsController {
  constructor(private readonly consumedProductsService: ConsumedProductsService) {
  }
  @Post()
  async create(@Body() consumedProductDto: CreateConsumedProductDto) {
    return this.consumedProductsService.create(consumedProductDto)
  }
  @Put(':id')
  async updateState(@Param('id') id: number, @Body() param:UpdateConsumedProductDto) {
    return this.consumedProductsService.updateWeight(id,param.weight)
  }
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.consumedProductsService.findOneById(id)
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.consumedProductsService.remove(id)
  }
  @Get('stats/:userId')
  async getDailyStats(@Param('userId') userId: number) {
    return this.consumedProductsService.getDailyStats(userId)
  }
  @Get('meal/:meal')
  async findAllByMeal(@Param('meal') meal: ConsumedProduct['meal']) {
    return this.consumedProductsService.findAllByMeal(meal)
  }
}
