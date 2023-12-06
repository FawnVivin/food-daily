import {Text} from 'react-native-paper'

import { ParamsText } from './ProductItemDescription.styles'

import type { ProductItemDescriptionProduct } from "./ProductItemDescription.types";
import type { FC } from 'react'

const ProductItemDescription:FC<ProductItemDescriptionProduct> = ({weight = 100, calories,carbohydrates,proteins, fats}) => (
    <Text variant={"labelSmall"}>{weight}г.
      <Text> {calories} ккал </Text>
      <ParamsText variant={"titleSmall"}> Б </ParamsText>{proteins}г.
      <ParamsText variant={"titleSmall"}> Ж </ParamsText>{fats}г.
      <ParamsText variant={"titleSmall"}> У </ParamsText>{carbohydrates}г.
    </Text>
  )

export default ProductItemDescription
