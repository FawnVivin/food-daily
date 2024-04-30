import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common'
import { Role, UpdateVisitorDto, UpdateVisitorTrainerDto } from '@food-daily/shared/types'

import { VisitorsService } from '../services'
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {
  }
  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.visitorsService.findAll()
  }
  
  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get(':name')
  async findAllByName(@Param('name') name: string) {
    return this.visitorsService.findAllByName(name)
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() visitorDto: UpdateVisitorDto) {
    return this.visitorsService.update(id, visitorDto)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Put('trainer/:id')
  async updateVisitorTrainer(@Param('id') id: number, @Body() visitorDto: UpdateVisitorTrainerDto) {
    return this.visitorsService.updateVisitorTrainer(id, visitorDto)
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.visitorsService.findOneById(id)
  }
}
