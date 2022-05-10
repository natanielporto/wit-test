import React, {
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
import { fetchCity, forecastFetch } from "../api/apiFetch";
import { cities } from "./citiesToFetch";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const { children } = props;
  const [forecastArray, setForecastArray] = useState([]);

  const fetchCityForecastData = useCallback(async () => {
    const citiesForecast = await Promise.all(
      cities.map(async (city) => {
        const treatedCityName = city.name;

        const cityCode = await fetchCity(treatedCityName);

        const { CountryID, key } = cityCode;

        const forecast = await forecastFetch(key);

        const {
          data: { DailyForecasts },
        } = forecast;

        const cityForecast = DailyForecasts?.map((forecast) => {
          const {
            Date,
            Temperature: {
              Minimum: { Value: MinValue, Unit: MinUnit },
              Maximum: { Value: MaxValue, Unit: MaxUnit },
            },
            Day: { Icon: DayIcon, IconPhrase: DayIconPhrase },
            Night: { Icon: NightIcon, IconPhrase: NightIconPhrase },
          } = forecast;

          return {
            Date,
            MinValue,
            MinUnit,
            MaxValue,
            MaxUnit,
            DayIcon,
            DayIconPhrase,
            NightIcon,
            NightIconPhrase,
          };
        });

        return { treatedCityName, CountryID, cityForecast };
      })
    );
    setForecastArray(citiesForecast);
  }, []);

  useEffect(() => {
    fetchCityForecastData();
  }, []);

  const value = useMemo(
    () => ({
      forecastArray,
    }),
    [forecastArray]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}
