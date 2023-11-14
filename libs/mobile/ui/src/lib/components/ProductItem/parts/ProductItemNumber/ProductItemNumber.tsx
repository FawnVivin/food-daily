import { NumberText, ProductItemNumberRoot } from './ProductItemNumber.styles'
import { FC } from 'react'
import { ProductItemNumberProps } from './ProductItemNumber.types'

const ProductItemNumber: FC<ProductItemNumberProps> = ({ itemNumber }) => {
  return (
    <ProductItemNumberRoot>
      <NumberText variant={'titleLarge'}>{itemNumber}</NumberText>
    </ProductItemNumberRoot>
  )
}
export default ProductItemNumber
