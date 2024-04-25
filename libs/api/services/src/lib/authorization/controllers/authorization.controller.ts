import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { RegistrationBody} from '@food-daily/shared/types';

import { AuthorizationService } from '../services'
import { JwtAuthGuard, LocalAuthGuard } from '../guards'

import type { Payload } from '../types'
import type { User } from '@food-daily/shared/types'

@Controller('user')
export class AuthorizationController {
  constructor(private authService: AuthorizationService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request) {
    return this.authService.login(req.user as User)
  }
  @Post('registration')
  async registration(@Body() {user, trainer, visitor}: RegistrationBody) {
    return this.authService.registration(user, trainer, visitor)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@Req() req: Request) {
    return this.authService.getUser(req.user as Payload)
  }
}
