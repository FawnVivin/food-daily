import { List } from 'react-native-paper'

import { ProductItem } from '../ProductItem'

import type { FC } from 'react'
import type { ConsumedProductListProps } from './ConsumedProductList.types'

const ConsumedProductsList:FC<ConsumedProductListProps> = ({products, screenType}) => (
  <List.Section>
    {products.map(({product, ...consumedProductParams},index)=>
      <ProductItem
        key={product.id*index}
        screenType={screenType}
        itemNumber={index+1}
        name={product.name}
        {...consumedProductParams}
      />
    )}
  </List.Section>
)

export default ConsumedProductsList
