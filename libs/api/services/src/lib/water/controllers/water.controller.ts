import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import {  WaterDto } from "@food-daily/shared/types";

import { WaterService } from "../services";
import { JwtAuthGuard } from '../../authorization/guards'


@Controller('water')
export class WaterController {
  constructor(private readonly waterService: WaterService) {
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.waterService.findByUserId(id)
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() waterDto: WaterDto) {
    return this.waterService.create(waterDto)
  }
  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() {quantity, visitorId}: WaterDto) {
    return this.waterService.updateQuantity(quantity, visitorId)
  }
}
