import React, { useContext } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { ForecastCard } from "../../components/forecastCard";
import { WeatherContext } from "../../globalContext/weatherContext";

export const CityPage = ({ route }) => {
  const {
    params: { treatedCityName },
  } = route;

  const weatherContext = useContext(WeatherContext);
  const { forecastArray } = weatherContext;

  return (
    <SafeAreaView style={{ backgroundColor: "#DFEDF0" }}>
      <FlatList
        data={forecastArray.filter(
          (city) => city.treatedCityName === treatedCityName
        )}
        keyExtractor={(item) => item.Date}
        renderItem={({ item }) => <ForecastCard data={item} />}
      />
    </SafeAreaView>
  );
};

CityPage.navigationOptions = {
  title: "CityPage",
};
