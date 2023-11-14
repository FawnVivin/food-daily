import { StackNavigationProp } from '@react-navigation/stack'

export enum MealType{
  dinner='Ужин',
  breakfast='Завтрак',
  lunch='Обед'
}

export type RootStackParamList = {
  AuthorizationScreen:undefined,
  HomeScreen:undefined,
  MealScreen: {
    mealType: 'dinner'|'breakfast'|'lunch'
  },
  ProductScreen: {
    productId: number
  }
}

export type ScreenNavigationProps = StackNavigationProp<RootStackParamList>
