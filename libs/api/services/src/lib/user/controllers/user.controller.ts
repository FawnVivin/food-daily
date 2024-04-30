import { Controller, Delete, Param, UseGuards } from "@nestjs/common";
import { Role } from "@food-daily/shared/types";

import { UsersService } from "../services";
import { JwtAuthGuard } from '../../authorization/guards'
import { HasRole } from '../../authorization/decorators'

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete('visitor/:id')
  async deleteVisitor(@Param('id') id: number) {
    return this.usersService.removeVisitor(id)
  }

  @HasRole(Role.Admin)
  @UseGuards(JwtAuthGuard)
  @Delete('trainer/:id')
  async deleteTrainer(@Param('id') id: number) {
    return this.usersService.removeTrainer(id)
  }
}
