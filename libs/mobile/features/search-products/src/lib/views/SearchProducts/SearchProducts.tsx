import { Fragment, useEffect, useState } from 'react'
import { Header, ProductsList } from '@food-daily/mobile/ui'
import { SearchProductsRoot } from './SearchProducts.styles'
import { products as allProducts } from '@food-daily/mobile/fixtures'
import { ProductScreens } from '@food-daily/mobile/types'
import { Product } from '@food-daily/shared/types'
import { Searchbar } from 'react-native-paper'

const SearchProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    setProducts(allProducts)
  }, [setProducts])
  const handleChangeText = (value:string) => {
    setSearchValue(value)
    const filteredProducts = allProducts.filter((product)=>product.title.includes(value))
    setProducts(filteredProducts)
  }
  return (
    <Fragment>
      <Header title={'Найти продукт'} />
      <SearchProductsRoot>
        <Searchbar value={searchValue} onChangeText={handleChangeText}/>
        <ProductsList products={products} screenType={ProductScreens.searchProduct} />
      </SearchProductsRoot>
    </Fragment>

  )
}

export default SearchProducts

