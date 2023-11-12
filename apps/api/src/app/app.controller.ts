import { Controller, Get, Post, Body } from '@nestjs/common'
import { User } from '@food-daily/shared/types'

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }
  @Post()
  createUser(@Body() user:User) {
    return this.appService.createUser(user);
  }
  @Post('updateUser')
  updateUser(@Body() user:User) {
    return this.appService.updateUser(user);
  }
}
