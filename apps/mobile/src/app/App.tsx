import React from 'react';
import {Home} from '@food-dairy/mobile/features/home'
import { darkTheme } from '@food-dairy/mobile/ui'
import { ThemeProvider } from 'styled-components'
import { PaperProvider, Text } from 'react-native-paper'
import { AppRegistry } from 'react-native'

import { AppRoot } from './App.styles'


export const App = () => (
  <PaperProvider>
    <ThemeProvider theme={darkTheme}>
      <AppRoot>
        <Home />
        <Text>ssss</Text>
      </AppRoot>
    </ThemeProvider>
  </PaperProvider>
);



AppRegistry.registerComponent('food-dairy-mobile', () => App);

export default App;
