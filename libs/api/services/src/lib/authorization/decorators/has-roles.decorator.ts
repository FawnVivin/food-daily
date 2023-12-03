import { SetMetadata } from '@nestjs/common';

import type { Role } from '@food-daily/shared/types'



export const HasRole = (role: Role) => SetMetadata('role', role);
