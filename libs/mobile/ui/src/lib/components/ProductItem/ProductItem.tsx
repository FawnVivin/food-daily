
import { useNavigation } from '@react-navigation/native'

import { ProductItemDescription } from './parts/ProductItemDescription'
import { ProductItemNumber } from './parts/ProductItemNumber'
import { ProductItemRoot } from './ProductItem.styles'

import type { ProductItemProps } from './ProductItem.types'
import type { FC } from 'react'
import type { StackNavigationProp } from '@react-navigation/stack'
import type { RootStackParamList } from '@food-daily/mobile/types'

const ProductItem: FC<ProductItemProps> = ({ screenType, name, params, itemNumber, id }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const handleProductPress = () => navigation.navigate(screenType, { productId: id })

  return (
    <ProductItemRoot
      onPress={handleProductPress}
      titleNumberOfLines={2}
      title={name}
      description={<ProductItemDescription {...params} />}
      left={() => <ProductItemNumber itemNumber={itemNumber} />}
    />
  )
}

export default ProductItem
