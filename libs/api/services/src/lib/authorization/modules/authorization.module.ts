import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { AuthorizationService } from '../services'
import { LocalStrategy, JwtStrategy } from '../strategies'
import { AuthorizationController } from '../controllers'
import { jwtConstants } from '../constants'
import { UserModule } from '../../user'


@Module({
  imports: [ PassportModule, UserModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '30d' }
  })],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, LocalStrategy, JwtStrategy]
})
export class AuthorizationModule {
}
