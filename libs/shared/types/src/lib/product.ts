export type Product = ProductParams & {
  id: number,
  name: string,
  description: string,
  verified: boolean
}

export type ProductParams = {
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number
}

export type CreateProductDto = {
  name: string,
  description: string,
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  authorId: number,
}

