import React from 'react'
import { AppRegistry } from 'react-native'
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { darkTheme, lightTheme } from '@food-daily/mobile/ui'
import { HomeScreen } from '@food-daily/mobile/features/home'
import { Authorization } from '@food-daily/mobile/features/authorization'
import { Meal } from '@food-daily/mobile/features/meal'
import { MealProduct } from '@food-daily/mobile/features/meal-product'
import { UserProducts } from '@food-daily/mobile/features/user-products'
import { UserProduct } from '@food-daily/mobile/features/user-product'
import { SearchProduct } from '@food-daily/mobile/features/search-product'
import { SearchProducts } from '@food-daily/mobile/features/search-products'
import { AddProductMenu } from '@food-daily/mobile/features/add-product-menu'
import { AddUserProducts } from '@food-daily/mobile/features/add-user-products'
import { CreateProduct } from '@food-daily/mobile/features/create-product'

import type { RootStackParamList } from '@food-daily/mobile/types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => {
  const mode = 'dark'
  const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme })
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme })
  const theme = mode === 'dark' ? darkTheme : lightTheme
  const navTheme = mode === 'dark' ? DarkTheme : LightTheme

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator initialRouteName={'AuthorizationScreen'} screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'AuthorizationScreen'} component={Authorization} />
            <Stack.Screen name={'MealScreen'} component={Meal} />
            <Stack.Screen name={'MealProductScreen'} component={MealProduct} />
            <Stack.Screen name={'UserProductScreen'} component={UserProduct} />
            <Stack.Screen name={'UserProductsScreen'} component={UserProducts} />
            <Stack.Screen name={'SearchProductScreen'} component={SearchProduct} />
            <Stack.Screen name={'SearchProductsScreen'} component={SearchProducts} />
            <Stack.Screen name={'AddProductMenuScreen'} component={AddProductMenu} />
            <Stack.Screen name={'AddUserProductsScreen'} component={AddUserProducts} />
            <Stack.Screen name={'CreateProductScreen'} component={CreateProduct} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  )
}


AppRegistry.registerComponent('food-daily-mobile', () => App)

export default App
