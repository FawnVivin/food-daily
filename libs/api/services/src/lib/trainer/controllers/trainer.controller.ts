import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import {  TrainerDto } from "@food-daily/shared/types";

import { TrainerService } from "../services";


@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {
  }

  
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.trainerService.findById(id)
  }

 
  @Post()
  async create(@Body() trainerDto: TrainerDto) {
    return this.trainerService.create(trainerDto)
  }

  
  @Put(':id')
  async update(@Param('id') id: number, @Body() trainerDto: TrainerDto) {
    return this.trainerService.updateTrainer(id, trainerDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.trainerService.remove(id)
  }
}
