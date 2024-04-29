import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@food-daily/mobile/features/home";
import { MealProduct } from "@food-daily/mobile/features/meal-product";
import { Meal } from "@food-daily/mobile/features/meal";
import { UserProducts } from "@food-daily/mobile/features/user-products";
import { UserProduct } from "@food-daily/mobile/features/user-product";
import { SearchProduct } from "@food-daily/mobile/features/search-product";
import { SearchProducts } from "@food-daily/mobile/features/search-products";
import { AddProductMenu } from "@food-daily/mobile/features/add-product-menu";
import { AddUserProducts } from "@food-daily/mobile/features/add-user-products";
import { CreateProduct } from "@food-daily/mobile/features/create-product";
import { Registration } from "@food-daily/mobile/features/registration";
import { useToken } from "@food-daily/mobile/hooks";
import { Fragment } from "react";
import { Authorization } from "@food-daily/mobile/features/authorization";

import type { RootStackParamList } from "@food-daily/mobile/types";

const UserRoutes = () => {
  const { isTokenExist } = useToken();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      {isTokenExist ? (
        <Fragment>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'MealScreen'} component={Meal} />
          <Stack.Screen name={'MealProductScreen'} component={MealProduct} />
          <Stack.Screen name={'UserProductScreen'} component={UserProduct} />
          <Stack.Screen name={'UserProductsScreen'} component={UserProducts} />
          <Stack.Screen
            name={'SearchProductScreen'}
            component={SearchProduct}
          />
          <Stack.Screen
            name={'SearchProductsScreen'}
            component={SearchProducts}
          />
          <Stack.Screen
            name={'AddProductMenuScreen'}
            component={AddProductMenu}
          />
          <Stack.Screen
            name={'AddUserProductsScreen'}
            component={AddUserProducts}
          />
          <Stack.Screen
            name={'CreateProductScreen'}
            component={CreateProduct}
          />
          <Stack.Screen name={'RegistrationScreen'} component={Registration} />
        </Fragment>
      ) : (
        <Stack.Screen
            name={'AuthorizationScreen'}
            component={Authorization}
          />
      )}
    </Stack.Navigator>
  )}

export default UserRoutes