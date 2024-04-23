import type { User } from "./user"

export type TrainerType = {
  id: number
  name: string
  description: string
  users: User[]
}

export type TrainerDto = Omit<TrainerType,'id'|'users'>