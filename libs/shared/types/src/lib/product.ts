export type Product = {
  id: number,
  name: string,
  description: string,
  params: ProductParams
  authorId: number,
  verified: boolean
}

export type ProductParams = {
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  weight: number
}
