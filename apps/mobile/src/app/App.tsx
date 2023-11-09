import React from 'react';
import { AppRegistry } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { darkTheme } from '@food-dairy/mobile/ui'
import { HomeScreen } from '@food-dairy/mobile/features/home'
import { Authorization } from '@food-dairy/mobile/features/authorization'

import type { RootStackParamList } from '@food-dairy/mobile/types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => (
  <PaperProvider>
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer >
         <Stack.Navigator initialRouteName={"HomeScreen"}>
           <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
           <Stack.Screen name="AuthorizationScreen" component={Authorization} />
         </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  </PaperProvider>
);

AppRegistry.registerComponent('food-dairy-mobile', () => App);

export default App;
