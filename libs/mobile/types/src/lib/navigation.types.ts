import type { StackNavigationProp } from "@react-navigation/stack";

export const Meals = {
  dinner: "Ужин",
  breakfast: "Завтрак",
  lunch: "Обед"
};

export type MealType = keyof typeof Meals

export enum ProductScreens {
  mealProduct = "MealProductScreen",
  userProduct = "UserProductScreen",
  searchProduct = "SearchProductScreen"
}

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Statistics: undefined,
  UserProducts: undefined
};

export type RootStackParamList = {
  RegistrationScreen: undefined,
  AuthorizationScreen: undefined,
  HomeScreen: undefined,
  SearchProductsScreen: undefined
  AddProductMenuScreen: undefined
  UserProductsScreen: undefined,
  AddUserProductsScreen: undefined,
  CreateProductScreen: undefined,
  MealScreen: {
    mealType: MealType
  },
  SearchProductScreen: {
    productId: number
  },
  MealProductScreen: {
    productId: number
  },
  UserProductScreen: {
    productId: number
  },
}

export type ScreenNavigationProps = StackNavigationProp<RootStackParamList & TabParamList>
