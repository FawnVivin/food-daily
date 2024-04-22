import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import {  TrainerDto } from "@food-daily/shared/types";

import { TrainerService } from "../services";
import { JwtAuthGuard } from '../../authorization/guards'


@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.trainerService.findByUserId(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() trainerDto: TrainerDto) {
    return this.trainerService.create(trainerDto)
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Param('id') id: number,@Body() trainerDto: TrainerDto) {
    return this.trainerService.updateTrainer(id, trainerDto)
  }
}
