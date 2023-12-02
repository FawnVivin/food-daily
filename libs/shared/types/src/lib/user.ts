import { Product } from './product'
export type UserNorms = {
  calorieNorm: number,
  proteinNorm:number,
  fatsNorm: number,
  carbohydrateNorm:number,
}
export type User = UserNorms&{
  id: number,
  name: string,
  age: number,
  sex: keyof typeof Sex,
  weight:number,
  height: number,
  activity: keyof typeof Activity,
  target: keyof typeof Target,
  role: 'admin'|'user',
  products: Product[]
}

export type UpdateUserDto = {
  age: number,
  sex: keyof typeof Sex,
  weight:number,
  height: number,
  target: keyof typeof Target,
  activity: keyof typeof Activity,
}

export type CreateUserDto = {
  name: string,
  age: number,
  sex: keyof typeof Sex,
  weight:number,
  height: number,
  target: keyof typeof Target,
  activity: keyof typeof Activity,
}
export enum Activity {
  minimal,
  weak,
  middle,
  high,
  extreme
}
export enum Target  {
  loss,
  gain,
  retention
}

export enum Sex  {
  male,
  female
}
