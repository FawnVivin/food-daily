import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from '../../user'

import type { Payload } from '../types'
import type { CreateUserDto, User } from '@food-daily/shared/types'


@Injectable()
export class AuthorizationService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(email)

    if (user && user.password === password) {
      return user
    }

    throw new BadRequestException('Email or password is incorrect :(')
  }

  login(user: User) {
    const payload = {id:user.id, role:user.role, email:user.email}

    return {
      user,
      access_token: this.jwtService.sign(payload)
    }
  }

  async getUser({ id }:Payload) {
    console.log(id)
    return await this.usersService.findOneById(id)
  }

  async registration(user: CreateUserDto) {
    await this.usersService.create(user)

    return {
      user,
      access_token: this.jwtService.sign({ user })
    }
  }
}
