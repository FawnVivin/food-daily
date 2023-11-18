import type { StackNavigationProp } from '@react-navigation/stack'

export enum MealType {
  dinner = 'Ужин',
  breakfast = 'Завтрак',
  lunch = 'Обед'
}

export enum ProductScreens {
  mealProduct = 'MealProductScreen',
  userProduct = 'UserProductScreen',
  searchProduct = 'SearchProductScreen'
}

export type RootStackParamList = {
  AuthorizationScreen: undefined,
  HomeScreen: undefined,
  MealScreen: {
    mealType: 'breakfast' | 'dinner' | 'lunch'
  },
  SearchProductScreen: {
    productId: number
  },
  MealProductScreen: {
    productId: number
  },
  UserProductsScreen: undefined,
  UserProductScreen: {
    productId: number
  }
}

export type ScreenNavigationProps = StackNavigationProp<RootStackParamList>
