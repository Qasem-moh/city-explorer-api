let Forecast=require('../models/ForCast.model')
let WeatherData = (req, res) => {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;
  let findData = () => {
    return weather.data.map((item) => {
      return new Forecast(item);
    });
  };
  res.json(findData());
};

module.exports = WeatherData;
