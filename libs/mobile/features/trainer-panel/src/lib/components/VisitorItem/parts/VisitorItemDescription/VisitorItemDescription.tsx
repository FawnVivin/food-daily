import {Text} from 'react-native-paper'
import { Target } from '@food-daily/mobile/types';

import { ParamsText } from './VisitorItemDescription.styles'

import type { Visitor } from '@food-daily/shared/types';
import type { FC } from 'react'

const VisitorItemDescription:FC<Visitor> = ({age, weight, height, target}) => (
    <Text variant={"labelSmall"}>
      <ParamsText variant={"labelSmall"}> Цель: </ParamsText>{Target[target]}
    </Text>
  )

export default VisitorItemDescription
