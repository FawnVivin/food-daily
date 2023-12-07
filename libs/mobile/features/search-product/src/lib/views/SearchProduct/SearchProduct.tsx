import { useRoute } from "@react-navigation/native";
import { Fragment } from "react";
import { Header, ProductDescription, ScreenLoader } from "@food-daily/mobile/ui";
import { useGetProduct } from "@food-daily/mobile/api";

import { SearchProductForm } from "../../components";

import { SearchProductRoot } from "./SearchProduct.styles";

import type { RootStackParamList } from "@food-daily/mobile/types";
import type { RouteProp } from "@react-navigation/native";


const SearchProduct = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "SearchProductScreen">>();
  const { data: product, isLoading, isSuccess } = useGetProduct(params.productId);

  if (isLoading || !isSuccess) return <ScreenLoader />;
  return (
    <Fragment>
      <Header title={product.name} />
      <SearchProductRoot>
        <ProductDescription {...product} />
        <SearchProductForm id={product.id}/>
      </SearchProductRoot>
    </Fragment>
  );
};

export default SearchProduct;
