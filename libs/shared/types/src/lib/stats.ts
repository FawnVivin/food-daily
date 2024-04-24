export type Stats = {
  values: number[],
  labels: string[]
}

export type StatsResponse = {
  calories: Stats,
  proteins: Stats,
  carbohydrates: Stats,
  fats: Stats
}

export enum WeekLabels{
  'ВС',
  'ПН',
  'ВТ',
  'СР',
  'ЧТ',
  'ПТ',
  'СБ'
}