let Forecast = class Forecast {
  constructor(weatherData) {
    this.valid_date = weatherData.valid_date;
    this.description = weatherData.weather.description;
  }
};
module.exports = Forecast;
