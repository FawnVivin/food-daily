import { Body, Controller, Get, Param, Put, Delete, UseGuards } from "@nestjs/common";
import { Role, TrainerDto } from "@food-daily/shared/types";

import { TrainersService } from "../services";
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

@Controller('trainer')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.trainersService.findAll()
  }


  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.trainersService.findById(id)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() trainerDto: TrainerDto) {
    return this.trainersService.updateTrainer(id, trainerDto)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.trainersService.remove(id)
  }
}
