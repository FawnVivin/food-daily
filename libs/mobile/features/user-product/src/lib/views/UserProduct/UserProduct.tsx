import { Banner, Button, Text, useTheme } from 'react-native-paper'
import { useRoute } from '@react-navigation/native'
import { getProductById } from '@food-daily/mobile/helpers'
import { Fragment } from 'react'
import { Header, ProductDescription } from '@food-daily/mobile/ui'

import { ButtonWrapper, UserProductRoot } from './UserProduct.styles'

import type { RootStackParamList } from '@food-daily/mobile/types'
import type { RouteProp} from '@react-navigation/native';

const UserProduct = () => {
  const { colors } = useTheme()
  const { params } = useRoute<RouteProp<RootStackParamList, 'UserProductScreen'>>()
  const product = getProductById(params.productId)

  if (!product) return (
    <Banner visible={true}>
      <Text>Product Not Found(((</Text>
    </Banner>
  )

  const handleDelete = () => {
    alert(`Deleted ${product.id} - product`)
  }

  return (
    <Fragment>
      <Header title={product.title} />
      <UserProductRoot>
        <ProductDescription {...product} />
        <ButtonWrapper>
          <Button
            onPress={handleDelete}
            mode={'contained'}
            buttonColor={colors.tertiaryContainer}
            textColor={colors.onTertiaryContainer}
          >
            Удалить
          </Button>
        </ButtonWrapper>
      </UserProductRoot>
    </Fragment>
  )
}

export default UserProduct
