export type User = {
  id: number,
  name: string,
  age: number,
  sex: keyof typeof Sex,
  weight:number,
  height: number,
  target: keyof typeof Target
}

export const Target = {
  loss: 'Хочу похудеть',
  gain: 'Хочу набрать вес',
  retention: 'Хочу удержать вес'
}

export const Sex = {
  male: 'Мужской',
  female: 'Женский'
}
