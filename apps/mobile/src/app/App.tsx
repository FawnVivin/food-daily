import { AppRegistry } from "react-native";
import { adaptNavigationTheme, PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { darkTheme, lightTheme } from "@food-daily/mobile/ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@food-daily/mobile/constants";

import Routes from "./routes/Routes";

export const App = () => {
  const mode = "dark";
  const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme });
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });
  const theme = mode === "dark" ? darkTheme : lightTheme;
  const navTheme = mode === "dark" ? DarkTheme : LightTheme;

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer theme={navTheme}>
            <Routes/>
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
};


AppRegistry.registerComponent("food-daily-mobile", () => App);

export default App;
