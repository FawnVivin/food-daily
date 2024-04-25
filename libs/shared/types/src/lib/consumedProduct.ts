import type { Product, ProductParams } from "./product";
import type { Visitor } from "./visitor";

export type ConsumedProduct = ProductParams & {
  id: number,
  weight: number,
  date: Date,
  meal: keyof typeof Meal
}

export type ConsumedProductDto = ConsumedProduct & {
  product: Product
  visitor: Visitor
}

export type CreateConsumedProductDto = {
  weight: number,
  meal: keyof typeof Meal,
  productId: number,
  visitorId: number
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

