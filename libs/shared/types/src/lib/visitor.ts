import type { User } from './user'
import type { Product } from './product'

export type VisitorNorms = {
  calorieNorm: number,
  proteinNorm: number,
  fatsNorm: number,
  carbohydrateNorm: number,
}

export type Visitor = VisitorNorms & {
  id: number,
  name: string,
  age: number,
  sex: keyof typeof Sex,
  weight: number,
  height: number,
  activity: keyof typeof Activity,
  target: keyof typeof Target,
  products: Product[]
  trainer: number
  user: User
}

export type UpdateVisitorDto = {
  age: number,
  sex: keyof typeof Sex,
  weight: number,
  height: number,
  target: keyof typeof Target,
  activity: keyof typeof Activity,
}

export type CreateVisitorDto = {
  name: string,
  age: number,
  sex: keyof typeof Sex,
  weight: number,
  height: number,
  target: keyof typeof Target,
  activity: keyof typeof Activity,
  trainer: number
}

export enum Activity {
  minimal,
  weak,
  middle,
  high,
  extreme
}

export enum Target {
  loss,
  gain,
  retention
}

export enum Sex {
  male,
  female
}
