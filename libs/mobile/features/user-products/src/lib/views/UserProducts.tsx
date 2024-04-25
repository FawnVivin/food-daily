import { Fragment } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductScreens } from "@food-daily/mobile/types";
import { Header, PlusButton, ProductsList, ScreenLoader } from "@food-daily/mobile/ui";
import { useGetUser } from "@food-daily/mobile/api";

import { UserProductsWrapper } from "./UserProducts.styles";


import type { ScreenNavigationProps } from "@food-daily/mobile/types";

const UserProducts = () => {
  const navigation = useNavigation<ScreenNavigationProps>();
  const { data: user, isLoading, isSuccess } = useGetUser()
  const handlePlusPress = () => navigation.navigate("CreateProductScreen");

  if (isLoading || !isSuccess) return <ScreenLoader />;
  const {visitor} = user

  if (!visitor) return null
  return (
    <Fragment>
      <Header title={"Ваши продукты"} backButton={false} />
      <ScrollView>
        <UserProductsWrapper>
          <ProductsList products={visitor.products} screenType={ProductScreens.userProduct} />
        </UserProductsWrapper>
      </ScrollView>
      <PlusButton onPress={handlePlusPress} />
    </Fragment>
  );
};

export default UserProducts;
