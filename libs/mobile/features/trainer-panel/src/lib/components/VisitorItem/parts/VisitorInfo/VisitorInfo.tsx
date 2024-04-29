import { View } from "react-native"
import { Divider, Text, useTheme } from 'react-native-paper'
import { Sex, Target } from "@food-daily/mobile/types"


import type { Visitor } from "@food-daily/shared/types"
import type { FC } from "react"

const VisitorInfo: FC<Visitor> = ({
  name,
  age,
  height,
  weight,
  target,
  sex,
  calorieNorm,
  fatsNorm,
  carbohydrateNorm,
  proteinNorm
}) => {
  const {colors} = useTheme()

  return(
  <View>
    <Text variant={'titleLarge'}>{name}</Text>
    <Divider style={{marginBottom:7, marginTop: 7}}/>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'}  style={{color: colors.secondary}}> Цель: </Text>
      {Target[target]}
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Пол: </Text>
      {Sex[sex]}
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Текущий вес: </Text>
      {weight} кг.
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Возраст: </Text>
      {age}
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Рост: </Text>
      {height} см.
    </Text>
    <Divider style={{marginBottom:7, marginTop: 7}}/>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Норма калорий: </Text>
      {calorieNorm} Ккал
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Норма белков: </Text>
      {proteinNorm} гр.
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Норма жиров: </Text>
      {fatsNorm} гр.
    </Text>
    <Text variant={'labelSmall'}>
      <Text variant={'labelLarge'} style={{color: colors.secondary}}> Норма углеводов: </Text>
      {carbohydrateNorm} гр.
    </Text>
  </View>
)
}

export default VisitorInfo