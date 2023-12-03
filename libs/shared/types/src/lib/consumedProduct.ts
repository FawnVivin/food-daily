import type { Product } from './product'

export type ConsumedProduct = {
  id: number,
  weight: number,
  date: Date,
  meal: keyof typeof Meal,
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number,
  product: Product
}

export type CreateConsumedProductDto = {
  weight: number,
  meal: keyof typeof Meal,
  productId: number,
  userId: number
}

export type DailyStats = {
  fats: number,
  proteins: number,
  calories: number,
  carbohydrates: number
}

export type UpdateConsumedProductDto = Pick<ConsumedProduct, 'weight'>

export enum Meal {
  breakfast,
  dinner,
  lunch
}

