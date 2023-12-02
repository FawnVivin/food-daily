export type Product = {
  id: number,
  name:string,
  description:string,
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  verified: boolean
}

export type CreateProductDto = {
  name:string,
  description:string,
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  authorId: number,
}

