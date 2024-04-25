import type { TrainerDto, TrainerType } from "./trainer"
import type { CreateVisitorDto, Visitor } from "./visitor"

export enum Role {
  Admin='admin',
  User='user',
  Trainer='trainer'
}

export type User =  {
  id: number,
  email: string,
  role: Role,
}

export type FullUser = User & {
  trainer?: TrainerType,
  visitor?: Visitor
}

export type CreateUserDto = {
  email: string,
  password: string
}

export type RegistrationBody = {
  user: CreateUserDto,
  trainer?: TrainerDto,
  visitor?: CreateVisitorDto
}

export type Login = {
  email: string,
  password: string
}
