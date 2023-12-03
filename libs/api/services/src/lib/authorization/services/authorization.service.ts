import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from '../../user'

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
    return {
      user,
      access_token: this.jwtService.sign({ user })
    }
  }

  async getUser({user:{ id }}: {user:User}) {
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
