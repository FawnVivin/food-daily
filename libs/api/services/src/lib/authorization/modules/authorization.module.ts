import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { AuthorizationService } from '../services'
import { LocalStrategy, JwtStrategy } from '../strategies'
import { AuthorizationController } from '../controllers'
import { jwtConstants } from '../constants'
import { UserModule } from '../../user'
import { VisitorModule } from '../../visitor'
import { TrainerModule } from '../../trainer'


@Module({
  imports: [ PassportModule, UserModule, VisitorModule, TrainerModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '30d' }
  })],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, LocalStrategy, JwtStrategy]
})
export class AuthorizationModule {
}
