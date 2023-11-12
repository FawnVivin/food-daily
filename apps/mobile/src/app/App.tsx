import React from 'react';
import { AppRegistry } from 'react-native'
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper'
import { ThemeProvider} from 'styled-components'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { darkTheme, lightTheme } from '@food-dairy/mobile/ui'
import { HomeScreen } from '@food-dairy/mobile/features/home'
import { Authorization } from '@food-dairy/mobile/features/authorization'


import type { RootStackParamList } from '@food-dairy/mobile/types'

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
         <Stack.Navigator initialRouteName={"HomeScreen"}>
           <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
           <Stack.Screen name="AuthorizationScreen" component={Authorization} />
         </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  </PaperProvider>
)};



AppRegistry.registerComponent('food-dairy-mobile', () => App);

export default App;
