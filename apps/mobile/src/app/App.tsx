import React from 'react';
import { AppRegistry } from 'react-native'
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper'
import { ThemeProvider} from 'styled-components'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { darkTheme, lightTheme } from '@food-daily/mobile/ui'
import { HomeScreen } from '@food-daily/mobile/features/home'
import { Authorization } from '@food-daily/mobile/features/authorization'
import type { RootStackParamList } from '@food-daily/mobile/types'
import Meal from '../../../../libs/mobile/features/meal/src/lib/views/Meal/Meal'
import Product from '../../../../libs/mobile/features/product/src/lib/views/Product/Product'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => {
  const mode = 'dark'
  const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme });
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });
  const theme = mode==='dark'?darkTheme:lightTheme
  const navTheme = mode==='dark'?DarkTheme:LightTheme

  return(
  <PaperProvider theme ={theme}>
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
         <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown:false}}>
           <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
           <Stack.Screen name={'AuthorizationScreen'} component={Authorization} />
           <Stack.Screen name={'MealScreen'} component={Meal}/>
           <Stack.Screen name={'ProductScreen'} component={Product}/>
         </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  </PaperProvider>
)};



AppRegistry.registerComponent('food-daily-mobile', () => App);

export default App;
