import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import type { Role } from '@food-daily/shared/types'
import type { CanActivate, ExecutionContext } from '@nestjs/common';



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<Role>('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole) {
      return true;
    }

    const { user:{user} } = context.switchToHttp().getRequest();

    return requiredRole === user.role;
  }
}
