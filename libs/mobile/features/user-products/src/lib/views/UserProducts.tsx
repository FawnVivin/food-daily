import { Fragment } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProductScreens } from '@food-daily/mobile/types'
import { Header, PlusButton, ProductsList } from '@food-daily/mobile/ui'
import { products } from '@food-daily/mobile/fixtures'

import { UserProductsWrapper } from './UserProducts.styles'

import type { ScreenNavigationProps } from '@food-daily/mobile/types';

const UserProducts = () => {
  const navigation = useNavigation<ScreenNavigationProps>()
  const handlePlusPress = () => navigation.goBack()

  return(
    <Fragment>
      <Header title={'Ваши продукты'} backButton={false}/>
      <ScrollView>
        <UserProductsWrapper>
          <ProductsList products={products} screenType={ProductScreens.userProduct}/>
        </UserProductsWrapper>
      </ScrollView>
      <PlusButton onPress={handlePlusPress}/>
    </Fragment>
  )
}

export default UserProducts
