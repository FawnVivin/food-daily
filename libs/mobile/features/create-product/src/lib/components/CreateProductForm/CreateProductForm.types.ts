import type { Product, ProductParams } from '@food-daily/shared/types'

export type CreateProductFormParams = Omit<ProductParams, 'weight'> & Pick<Product, 'description'|'name'>
