import { Fragment } from 'react'
import { ScrollView } from 'react-native'
import { ProductScreens } from '@food-daily/mobile/types'
import { Header, ProductsList } from '@food-daily/mobile/ui'
import { products } from '@food-daily/mobile/fixtures'

import { AddUserProductsWrapper } from './AddUserProducts.styles'

const AddUserProducts = () => (
  <Fragment>
    <Header title={'Ваши продукты'} />
    <ScrollView>
      <AddUserProductsWrapper>
        <ProductsList products={products} screenType={ProductScreens.searchProduct} />
      </AddUserProductsWrapper>
    </ScrollView>
  </Fragment>
)

export default AddUserProducts
