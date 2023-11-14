import { FC } from 'react'
import { ProductItem } from '../ProductItem'
import { List } from 'react-native-paper'
import { ProductListProps } from './ProductList.types'

const ProductsList:FC<ProductListProps> = ({products}) => {
  return(
    <List.Section>
      {products.map((product,index)=>
        <ProductItem
          itemNumber={index+1}
          {...product}
        />
      )}
    </List.Section>
  )
}
export default ProductsList
