import { List } from 'react-native-paper'

import { ProductItem } from '../ProductItem'

import type { FC } from 'react'
import type { ProductListProps } from './ProductList.types'

const ProductsList:FC<ProductListProps> = ({products, screenType}) => (
    <List.Section>
      {products.map((product,index)=>
        <ProductItem
          key={product.id}
          screenType={screenType}
          itemNumber={index+1}
          {...product}
        />
      )}
    </List.Section>
  )

export default ProductsList
