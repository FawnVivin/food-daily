import { Fragment } from 'react'
import { Text } from 'react-native-paper'

import { CaloriesLabel } from './CaloriesProgressContent.styles'

import type { CaloriesProgressContentProps } from './CaloriesProgressContent.types'
import type { FC } from 'react';

const CaloriesProgressContent:FC<CaloriesProgressContentProps> = ({currentCalories, normCalories}) => (
  <Fragment>
    <Text variant={'headlineSmall'}>
      {currentCalories}
      <CaloriesLabel variant={'titleLarge'}> ккал</CaloriesLabel>
    </Text>
    <Text>{normCalories} ккал</Text>
  </Fragment>
)

export default CaloriesProgressContent
