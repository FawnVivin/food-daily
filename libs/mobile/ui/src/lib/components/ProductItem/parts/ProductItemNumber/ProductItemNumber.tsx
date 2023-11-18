import { NumberText, ProductItemNumberRoot } from './ProductItemNumber.styles'

import type { FC } from 'react'
import type { ProductItemNumberProps } from './ProductItemNumber.types'

const ProductItemNumber: FC<ProductItemNumberProps> = ({ itemNumber }) => (
    <ProductItemNumberRoot>
      <NumberText variant={'titleLarge'}>{itemNumber}</NumberText>
    </ProductItemNumberRoot>
  )

export default ProductItemNumber
