import { Module } from '@nestjs/common';
import { UsersService } from '../services'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../models'
import { UsersController } from '../controllers'


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
