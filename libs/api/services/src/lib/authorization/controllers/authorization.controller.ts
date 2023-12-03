import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { CreateUserDto} from '@food-daily/shared/types';

import { AuthorizationService } from '../services'
import { JwtAuthGuard, LocalAuthGuard } from '../guards'

import type { User } from '@food-daily/shared/types'

@Controller('auth')
export class AuthorizationController {
  constructor(private authService: AuthorizationService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user as User)
  }
  @Post('registration')
  async registration(@Body() user: CreateUserDto) {
    return this.authService.registration(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@Req() req: Request) {
    console.log(req)
    return this.authService.getUser(req.user as {user:User})
  }
}
