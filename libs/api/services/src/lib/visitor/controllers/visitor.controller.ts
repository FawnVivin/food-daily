import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common'
import { Role, UpdateVisitorDto } from '@food-daily/shared/types'

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

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() visitorDto: UpdateVisitorDto) {
    return this.visitorsService.update(id, visitorDto)
  }
  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.visitorsService.remove(id)
  }


  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.visitorsService.findOneById(id)
  }
}
