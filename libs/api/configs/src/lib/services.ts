import { ConsumedProductModule, ProductModule, UserModule, WaterModule } from "@food-daily/api/services";

import { AuthorizationModule } from '../../../services/src/lib/authorization'


export const services = [UserModule, ProductModule, ConsumedProductModule, AuthorizationModule, WaterModule]
