import React from "react";
import {
  Container,
  CardView,
  InformationContainer,
  TemperatureContainer,
  Degrees,
  DegreesSimbol,
  IconContainer,
  WeatherAndCityContainer,
  Skylight,
  City,
  DayContainer,
  Pill,
  PillText,
  DateNumber,
  DayName,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { weatherConditions } from "../../helpers/iconHelper";
import theme from "../../GlobalStyles/theme";
import { getDate } from "date-fns";

export const ForecastCard = ({ props, data }) => {
  const { cityForecast, treatedCityName, CountryID } = data;

  const currentDayName = () =>
    new Date().toLocaleString("en-us", { weekday: "long" }).split(" ")[0];

  return (
    <Container
      onPress={() => {
        props.navigation.navigate("CityPage", {
          treatedCityName,
        });
      }}
    >
      <CardView>
        <InformationContainer>
          <TemperatureContainer>
            <Degrees>
              {Math.floor(
                (cityForecast[0]?.MaxValue + cityForecast[0]?.MinValue) / 2
              )}
            </Degrees>
            <DegreesSimbol>
              {cityForecast[0].MaxUnit === "F" ? "f" : "°"}
            </DegreesSimbol>
            <IconContainer>
              <Icon
                name={weatherConditions(cityForecast[0].DayIcon)}
                size={72}
                color={theme.colors.accent}
              />
            </IconContainer>
          </TemperatureContainer>

          <WeatherAndCityContainer>
            <Skylight>{cityForecast[0]?.DayIconPhrase.toUpperCase()}</Skylight>
            <City>{`${treatedCityName.toUpperCase()}, ${CountryID}`}</City>
          </WeatherAndCityContainer>
        </InformationContainer>

        <DayContainer>
          <Pill>
            <Icon
              name="water"
              size={16}
              color={theme.colors.backgroundPrimary}
            />
            <PillText>68%</PillText>
          </Pill>
          <DateNumber>{getDate(new Date())}</DateNumber>
          <DayName>{currentDayName()}</DayName>
        </DayContainer>
      </CardView>
    </Container>
  );
};
