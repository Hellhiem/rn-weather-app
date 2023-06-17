export type APICity = {
  name: string;
  picture: string;
};

export type APIWeatherCityList = {
  date: string;
  city: {
    name: string;
    picture: string;
  };
  tempType: TemperatureTypes;
  temp: 74.29;
};

export type TemperatureTypes = 'C' | 'F' | 'K';
