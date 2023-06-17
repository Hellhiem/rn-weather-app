import { formatTemperatureToCelsius } from '@lib';

describe('formatTemperatureToCelsius', () => {
  it('should return the temperature in Celsius from kelvin', () => {
    const resultInCelsius = formatTemperatureToCelsius(300, 'K');

    expect(resultInCelsius).toEqual('27.0');
  });

  it('should return the temperature in Celsius from fahrenheit', () => {
    const resultInCelsius = formatTemperatureToCelsius(89, 'F');

    expect(resultInCelsius).toEqual('32.0');
  });

  it('should return the Celsius if units are in Celsius', () => {
    const resultInCelsius = formatTemperatureToCelsius(21, 'C');

    expect(resultInCelsius).toEqual('21.0');
  });
});
