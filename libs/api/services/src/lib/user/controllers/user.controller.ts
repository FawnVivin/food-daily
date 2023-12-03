import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common'
import { Role, UpdateUserDto } from '@food-daily/shared/types'

import { UsersService } from '../services'
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll()
  }

  @HasRole(Role.User)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
    return this.usersService.update(id, userDto)
  }
  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}
