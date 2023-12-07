import { Fragment, useEffect, useState } from "react";
import { Header, ProductsList, ScreenLoader } from "@food-daily/mobile/ui";
import { ProductScreens } from "@food-daily/mobile/types";
import { Searchbar } from "react-native-paper";
import { useGetAllProducts } from "@food-daily/mobile/api";

import { SearchProductsRoot } from "./SearchProducts.styles";

import type { Product } from "@food-daily/shared/types";

const SearchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const { data:allProducts, isLoading, isSuccess } = useGetAllProducts();

  useEffect(() => {
    if (isSuccess) setProducts(allProducts);
  }, [isSuccess]);
  if (isLoading || !isSuccess) return <ScreenLoader />;


  const handleChangeText = (value: string) => {
    setSearchValue(value);
    const filteredProducts = allProducts.filter((product) => product.name.includes(value));

    setProducts(filteredProducts);
  };

  return (
    <Fragment>
      <Header title={"Найти продукт"} />
      <SearchProductsRoot>
        <Searchbar value={searchValue} onChangeText={handleChangeText} />
        <ProductsList products={products} screenType={ProductScreens.searchProduct} />
      </SearchProductsRoot>
    </Fragment>

  );
};

export default SearchProducts;

