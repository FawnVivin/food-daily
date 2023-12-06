import { Fragment } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Meals, ProductScreens } from "@food-daily/mobile/types";
import { Header, ProductsList } from "@food-daily/mobile/ui";
import { meals } from "@food-daily/mobile/fixtures";

import { MealWrapper } from "./Meal.styles";

import type { RootStackParamList } from "@food-daily/mobile/types";
import { RouteProp } from "@react-navigation/native";

const Meal = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "MealScreen">>();

  return (
    <Fragment>
      <Header title={Meals[params.mealType]} />
      <ScrollView>
        <MealWrapper>
          <ProductsList
            products={meals[params.mealType]}
            screenType={ProductScreens.mealProduct} />
        </MealWrapper>
      </ScrollView>
    </Fragment>
  );
};

export default Meal;
