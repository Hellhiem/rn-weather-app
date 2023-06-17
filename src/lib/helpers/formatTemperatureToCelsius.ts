import { TemperatureTypes } from '@types';

export const formatTemperatureToCelsius = (
  temperature: number,
  units: TemperatureTypes,
) => {
  switch (units) {
    case 'C':
      return temperature.toFixed(1);
    case 'F':
      return Math.round((temperature - 32) / 1.8).toFixed(1);
    case 'K':
      return Math.round(temperature - 273.15).toFixed(1);
  }
};
