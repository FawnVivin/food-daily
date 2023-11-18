import { Banner, Text } from 'react-native-paper'
import { useRoute } from '@react-navigation/native'
import { getProductById } from '@food-daily/mobile/helpers'
import { Fragment } from 'react'
import { Header, ProductDescription } from '@food-daily/mobile/ui'

import { MealProductForm } from '../../components'

import { MealProductRoot } from './MealProduct.styles'

import type { RootStackParamList } from '@food-daily/mobile/types'
import type { RouteProp} from '@react-navigation/native';

const MealProduct = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealProductScreen'>>()
  const product = getProductById(params.productId)

  if (!product) return (
    <Banner visible={true}>
      <Text>Product Not Found(((</Text>
    </Banner>
  )
  return (
    <Fragment>
      <Header title={product.title} />
      <MealProductRoot>
        <ProductDescription {...product} />
        <MealProductForm weight={product.params.weight} />
      </MealProductRoot>
    </Fragment>
  )
}

export default MealProduct
