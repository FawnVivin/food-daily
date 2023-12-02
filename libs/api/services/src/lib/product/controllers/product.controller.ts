import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateProductDto} from '@food-daily/shared/types'
import { ProductsService } from '../services'
import { Product } from '@food-daily/api/services'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
  async create(@Body() productDto: CreateProductDto) {
    return this.productsService.create(productDto)
  }

  @Get()
  async findAll() {
    return this.productsService.findAll()
  }
  @Get('verified')
  async findAllVerified() {
    return this.productsService.findAllVerified()
  }
  @Put(':id')
  async updateState(@Param('id') id: number, @Body() state:Pick<Product, 'verified'>) {
    return this.productsService.updateState(id,state.verified)
  }
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.productsService.findOneById(id)
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.productsService.remove(id)
  }
}
