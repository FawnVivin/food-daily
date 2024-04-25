export enum ActivityCoef {
  minimal = 1.2,
  weak = 1.375,
  middle = 1.55,
  high = 1.7,
  extreme = 1.9
}


export enum TargetCaloriesCoef {
  loss = -250,
  gain = 0,
  retention = 250
}

export enum TargetProteinsCoef {
  loss = 0.3,
  gain = 0.35,
  retention = 0.3
}

export enum TargetFatsCoef {
  loss = 0.20,
  gain = 0.1,
  retention = 0.3
}

export enum TargetCarbohydratesCoef {
  loss = 0.5,
  gain = 0.55,
  retention = 0.4
}

export enum SexCoef {
  male = 5,
  female = -161
}
