import styled from "styled-components/native";
import theme from "../../GlobalStyles/theme";

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  height: 150px;
  margin: 5px 8px;
`;

export const CardView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const InformationContainer = styled.View``;

export const TemperatureContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Degrees = styled.Text`
  font-size: 72px;
  color: ${theme.colors.dark};
  margin-left: -5px;
  font-family: ${theme.fonts.primary};
`;

export const DegreesSimbol = styled.Text`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.primary};
  font-size: 32px;
  margin-right: 50px;
`;

export const IconContainer = styled.View`
  margin-top: 16px;
`;

export const WeatherAndCityContainer = styled.View`
  height: 63px;
`;

export const Skylight = styled.Text`
  color: ${theme.colors.accent};
  font-weight: bold;
  font-size: 16px;
`;

export const City = styled.Text`
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 16px;
`;

export const DayContainer = styled.View`
  align-items: center;
`;

export const Pill = styled.View`
  background-color: ${theme.colors.accent};
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 3px 10px;
`;

export const PillText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;

export const DateNumber = styled.Text`
  font-size: 56px;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.primary};
  line-height: 75px;
  height: 60px;
`;

export const DayName = styled.Text`
  font-size: 24px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.primary};
  line-height: 25px;
  height: 18px;
`;
