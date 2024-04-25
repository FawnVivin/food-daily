import { Fragment } from "react";
import { ScrollView } from "react-native";
import { ProductScreens } from "@food-daily/mobile/types";
import { Header, ProductsList, ScreenLoader } from "@food-daily/mobile/ui";
import { useGetUser } from "@food-daily/mobile/api";

import { AddUserProductsWrapper } from "./AddUserProducts.styles";

const AddUserProducts = () => {
  const {data: user, isLoading, isSuccess} = useGetUser()

  if (isLoading || !isSuccess) return <ScreenLoader />;
  const {visitor} = user

  if (!visitor) return null
  return (
    <Fragment>
      <Header title={"Ваши продукты"} />
      <ScrollView>
        <AddUserProductsWrapper>
          <ProductsList products={visitor.products} screenType={ProductScreens.searchProduct} />
        </AddUserProductsWrapper>
      </ScrollView>
    </Fragment>
  );
};

export default AddUserProducts;
