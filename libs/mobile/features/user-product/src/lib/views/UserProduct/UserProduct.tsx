import { Button, Chip, useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Fragment } from "react";
import { Header, ProductDescription, ScreenLoader } from "@food-daily/mobile/ui";
import { useDeleteProduct, useGetProduct } from "@food-daily/mobile/api";
import { ProductStatusIcon, ProductStatusMessage } from "@food-daily/shared/types";

import { ButtonWrapper, UserProductRoot } from "./UserProduct.styles";

import type { RootStackParamList, ScreenNavigationProps } from "@food-daily/mobile/types";
import type { RouteProp } from "@react-navigation/native";

const UserProduct = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<ScreenNavigationProps>();
  const { params: { productId } } = useRoute<RouteProp<RootStackParamList, "UserProductScreen">>();
  const { data: product, isSuccess, isLoading } = useGetProduct(productId);
  const { mutate } = useDeleteProduct(productId);

  if (isLoading || !isSuccess) return <ScreenLoader />;

  const handleDelete = () => {
    mutate(undefined, { onSuccess: () => navigation.goBack() });
  };

  return (
    <Fragment>
      <Header title={product.name} />
      <UserProductRoot>
        <ProductDescription {...product} />
        <ButtonWrapper>
          <Chip mode={"outlined"} icon={ProductStatusIcon[product.status]}>{ProductStatusMessage[product.status]}</Chip>
          <Button
            onPress={handleDelete}
            mode={"contained"}
            buttonColor={colors.tertiaryContainer}
            textColor={colors.onTertiaryContainer}
          >
            Удалить
          </Button>
        </ButtonWrapper>
      </UserProductRoot>
    </Fragment>
  );
};

export default UserProduct;
