import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@food-daily/api/models";

import { UsersService } from "../services";
import { UsersController } from "../controllers";
import { VisitorModule } from "../../visitor";
import { TrainerModule } from "../../trainer";


@Module({
  imports: [TypeOrmModule.forFeature([User]), VisitorModule, TrainerModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UserModule {
}
