import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components";
import theme from "./src/GlobalStyles/theme";
import { LandingPage } from "./src/pages/LandingPage";
import { CityPage } from "./src/pages/CityPage";
import { WeatherProvider } from "./src/globalContext/weatherContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <WeatherProvider>
        <NavigationContainer>
          <Navigator initialRouteName="LandingPage">
            <Screen name="LandingPage" component={LandingPage} />
            <Screen name="CityPage" component={CityPage} />
          </Navigator>
        </NavigationContainer>
      </WeatherProvider>
    </ThemeProvider>
  );
}
