import {Text} from 'react-native-paper'

import { ParamsText } from './ProductItemDescription.styles'

import type { FC } from 'react'
import type { ProductParams } from '@food-daily/shared/types'

const ProductItemDescription:FC<ProductParams> = ({weight, calories,carbohydrates,proteins, fats}) => (
    <Text variant={"labelSmall"}>{weight}г.
      <Text> {calories}2 ккал </Text>
      <ParamsText variant={"titleSmall"}> Б </ParamsText>{proteins}1г.
      <ParamsText variant={"titleSmall"}> Ж </ParamsText>{fats}1г.
      <ParamsText variant={"titleSmall"}> У </ParamsText>{carbohydrates}г.
    </Text>
  )

export default ProductItemDescription
