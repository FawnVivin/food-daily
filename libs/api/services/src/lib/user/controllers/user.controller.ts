import { Body, Controller, Delete, Get, Param, Put, Post, Patch } from '@nestjs/common'
import { UsersService } from '../services'
import { CreateUserDto, UpdateUserDto } from '@food-daily/shared/types'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
    return this.usersService.update(id, userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
