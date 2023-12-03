import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { CreateProductDto, Role } from '@food-daily/shared/types'

import { ProductsService } from '../services'
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

import type { Product } from '@food-daily/api/services'


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() productDto: CreateProductDto) {
    return this.productsService.create(productDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.productsService.findAll()
  }
  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Get('verified')
  async findAllVerified() {
    return this.productsService.findAllVerified()
  }
  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateState(@Param('id') id: number, @Body() state:Pick<Product, 'verified'>) {
    return this.productsService.updateState(id,state.verified)
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.productsService.findOneById(id)
  }
  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.productsService.remove(id)
  }
}
