import React, { useContext } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { ForecastCard } from "../../components/forecastCard";
import { WeatherContext } from "../../globalContext/weatherContext";

export const LandingPage = (props) => {
  const weatherContext = useContext(WeatherContext);
  const { forecastArray } = weatherContext;

  return (
    <SafeAreaView style={{ backgroundColor: "#DFEDF0" }}>
      <FlatList
        data={forecastArray}
        keyExtractor={(item) => item.treatedCityName}
        renderItem={({ item }) => <ForecastCard data={item} props={props} />}
      />
    </SafeAreaView>
  );
};

LandingPage.navigationOptions = {
  title: "LandingPage",
};
