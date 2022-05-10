import axios from "axios";

const BASE_URL = "http://dataservice.accuweather.com";
const KEY = "ezw31vfGLHUxMrmm1Gqv1bSCnFjLDNRL";
// const KEY = "klMPs6PRmiHPyAGjgFZOY6xcAWN1daxh";

export async function forecastFetch(key) {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${KEY}`
    );

    return response;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchCity(city) {
  try {
    const response = await axios.get(
      `${BASE_URL}/locations/v1/cities/search?apikey=${KEY}&q=${city}`
    );

    console.log(response.data[0]);
    return {
      key: response.data[0].Key,
      CountryID: response.data[0].AdministrativeArea.CountryID,
    };
  } catch (e) {
    console.log(e);
  }
}
