import { Fragment } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Meals, ProductScreens } from "@food-daily/mobile/types";
import { Header, ScreenLoader } from "@food-daily/mobile/ui";
import { useGetProductsByMeal, useGetUser } from "@food-daily/mobile/api";

import ConsumedProductsList from "../../../../../../ui/src/lib/components/ConsumedProductList/ConsumedProductList";

import { MealWrapper } from "./Meal.styles";

import type { RootStackParamList } from "@food-daily/mobile/types";
import type { RouteProp } from "@react-navigation/native";


const Meal = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "MealScreen">>();
  const { data: user } = useGetUser();
  const { data: products, isSuccess, isLoading } = useGetProductsByMeal(params.mealType, user?.id);

  if (!isSuccess || isLoading) return <ScreenLoader />;
  return (
    <Fragment>
      <Header title={Meals[params.mealType]} />
      <ScrollView>
        <MealWrapper>
          <ConsumedProductsList
            products={products}
            screenType={ProductScreens.mealProduct} />
        </MealWrapper>
      </ScrollView>
    </Fragment>
  );
};

export default Meal;
