export const weatherConditions = (number) => {
  const icons = {
    1: "sunny-outline",
    2: "sunny-outline",
    3: "partly-sunny-outline",
    4: "partly-sunny-outline",
    5: "menu-outline",
    6: "cloudy-outline",
    7: "cloudy-outline",
    8: "cloudy-outline",
    11: "menu-outline",
    12: "rainy-outline",
    13: "rainy-outline",
    14: "rainy-outline",
    18: "rainy-outline",
    19: "rainy-outline",
    20: "rainy-outline",
    21: "rainy-outline",
    15: "thunderstorm-outline",
    16: "thunderstorm-outline",
    17: "thunderstorm-outline",
    22: "snow-outline",
    23: "snow-outline",
    24: "snow-outline",
    25: "snow-outline",
    26: "snow-outline",
    27: "snow-outline",
    28: "snow-outline",
    29: "snow-outline",
    30: "thermometer-outline",
    31: "thermometer",
    32: "flag-outline",
    33: "moon-outline",
    34: "cloud-night-outline",
    35: "cloud-night-outline",
    36: "cloud-night-outline",
    37: "cloud-night-outline",
    38: "cloud-night-outline",
    39: "rainy-outline",
    40: "rainy-outline",
    41: "flash-outline",
    42: "flash-outline",
    43: "snow-outline",
    44: "snow-outline",
  };
  return icons[number];
};
