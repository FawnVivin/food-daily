import type { Visitor } from "./visitor"

export type TrainerType = {
  id: number
  name: string
  description: string
  visitors: Visitor[]
}

export type TrainerDto = Omit<TrainerType,'id'|'visitors'>