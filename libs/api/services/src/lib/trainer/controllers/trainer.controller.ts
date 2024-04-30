import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { Role, TrainerDto } from "@food-daily/shared/types";

import { TrainersService } from "../services";
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.trainersService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.trainersService.findById(id)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get(':name')
  async findOneByName(@Param('name') name: string) {
    return this.trainersService.findByName(name)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() trainerDto: TrainerDto) {
    return this.trainersService.updateTrainer(id, trainerDto)
  }

}
