import { Banner, Text } from 'react-native-paper'
import { useRoute } from '@react-navigation/native'
import { getProductById } from '@food-daily/mobile/helpers'
import { Fragment } from 'react'
import { Header, ProductDescription } from '@food-daily/mobile/ui'

import { SearchProductForm } from '../../components'

import { SearchProductRoot } from './SearchProduct.styles'

import type { RootStackParamList } from '@food-daily/mobile/types'
import type { RouteProp} from '@react-navigation/native';


const SearchProduct = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'SearchProductScreen'>>()
  const product = getProductById(params.productId)

  if (!product) return (
    <Banner visible={true}>
      <Text>Product Not Found(((</Text>
    </Banner>
  )
  return (
    <Fragment>
      <Header title={product.title} />
      <SearchProductRoot>
        <ProductDescription {...product} />
        <SearchProductForm/>
      </SearchProductRoot>
    </Fragment>
  )
}

export default SearchProduct
