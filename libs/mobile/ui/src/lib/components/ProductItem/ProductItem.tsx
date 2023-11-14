import { FC } from 'react'
import { ProductItemDescription } from './parts/ProductItemDescription'
import { ProductItemProps } from './ProductItem.types'
import { ProductItemNumber } from './parts/ProductItemNumber'
import { ProductItemRoot } from './ProductItem.styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@food-daily/mobile/types'

const ProductItem:FC<ProductItemProps> = ({ title, params, itemNumber, id}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const handleProductPress = () => navigation.navigate('ProductScreen',{productId:id})
  return(
    <ProductItemRoot
      onPress={handleProductPress}
      titleNumberOfLines={2}
      title={title}
      description={<ProductItemDescription {...params}/>}
      left={()=><ProductItemNumber itemNumber={itemNumber}/>}
    />
  )
}

export default ProductItem
