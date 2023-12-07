import { useNavigation } from "@react-navigation/native";

import { ProductItemDescription, ProductItemNumber } from "./parts";
import { ProductItemRoot } from "./ProductItem.styles";

import type { FC } from "react";
import type { ProductItemProps } from "./ProductItem.types";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "@food-daily/mobile/types";

const ProductItem: FC<ProductItemProps> = ({ screenType, name, itemNumber, id, ...params }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleProductPress = () => navigation.navigate(screenType, { productId: id });

  return (
    <ProductItemRoot
      onPress={handleProductPress}
      titleNumberOfLines={2}
      title={name}
      description={<ProductItemDescription {...params} />}
      left={() => <ProductItemNumber itemNumber={itemNumber} />}
    />
  );
};

export default ProductItem;
