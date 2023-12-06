import type { ProductParams } from "./product";

export type ConsumedProduct = ProductParams & {
  id: number,
  weight: number,
  date: Date,
  meal: keyof typeof Meal
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

export type UpdateConsumedProductDto = Pick<ConsumedProduct, "weight">

export enum Meal {
  breakfast,
  dinner,
  lunch
}

