import { useRoute } from '@react-navigation/native'
import { Fragment } from 'react'
import { Header, ProductDescription, ScreenLoader } from "@food-daily/mobile/ui";
import { useGetConsumedProductsById } from "@food-daily/mobile/api";

import { MealProductForm } from '../../components'

import { MealProductRoot } from './MealProduct.styles'

import type { RootStackParamList } from '@food-daily/mobile/types'
import type { RouteProp} from '@react-navigation/native';

const MealProduct = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealProductScreen'>>()
  const {data: consumedProduct, isLoading, isSuccess} = useGetConsumedProductsById(params.productId)

 if (!isSuccess||isLoading) return <ScreenLoader/>
  return (
    <Fragment>
      <Header title={consumedProduct.product.name} />
      <MealProductRoot>
        <ProductDescription description={consumedProduct.product.description} {...consumedProduct} />
        <MealProductForm weight={consumedProduct.weight} id={consumedProduct.id}/>
      </MealProductRoot>
    </Fragment>
  )
}

export default MealProduct
