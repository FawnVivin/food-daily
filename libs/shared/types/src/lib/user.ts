import type { Product } from './product'

export type UserNorms = {
  calorieNorm: number,
  proteinNorm: number,
  fatsNorm: number,
  carbohydrateNorm: number,
}

export enum Role {
  Admin='admin',
  User='user'
}

export type User = UserNorms & {
  id: number,
  name: string,
  age: number,
  email: string,
  sex: keyof typeof Sex,
  weight: number,
  height: number,
  activity: keyof typeof Activity,
  target: keyof typeof Target,
  role: Role,
  products: Product[]
}

export type UpdateUserDto = {
  age: number,
  sex: keyof typeof Sex,
  weight: number,
  height: number,
  target: keyof typeof Target,
  activity: keyof typeof Activity,
}

export type CreateUserDto = {
  name: string,
  age: number,
  sex: keyof typeof Sex,
  email: string,
  weight: number,
  height: number,
  target: keyof typeof Target,
  activity: keyof typeof Activity,
  password: string
}

export type Login = {
  email: string,
  password: string
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
