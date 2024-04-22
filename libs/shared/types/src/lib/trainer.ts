export type TrainerType = {
  id: number
  name: string
  description: string
}

export type TrainerDto = Omit<TrainerType,'id'>