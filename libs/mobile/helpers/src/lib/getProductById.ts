import { products } from '@food-daily/mobile/fixtures'

export const getProductById = (productId:number) => products.find((product) => product.id === productId)
