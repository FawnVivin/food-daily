import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards } from "@nestjs/common";
import { Role, TrainerDto } from "@food-daily/shared/types";

import { TrainerService } from "../services";
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.trainerService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.trainerService.findById(id)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() trainerDto: TrainerDto) {
    return this.trainerService.create(trainerDto)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() trainerDto: TrainerDto) {
    return this.trainerService.updateTrainer(id, trainerDto)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.trainerService.remove(id)
  }
}
