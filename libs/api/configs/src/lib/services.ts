import { ConsumedProductModule, ProductModule, UserModule } from '@food-daily/api/services'

import { AuthorizationModule } from '../../../services/src/lib/authorization'


export const services = [UserModule, ProductModule, ConsumedProductModule, AuthorizationModule]
