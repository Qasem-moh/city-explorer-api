let Forecast = require("../models/ForCast.model");

let DataAPI = (req, res) => {
  let URL = `http://api.weatherbit.io/v2.0/history/daily?key=342d733fdde44ed882595a15149cb170&lat=38.123&lon=-78.543&start_date=2021-06-25&end_date=2021-06-26`;
  let weatherAPIAxios = axios.get(URL).then((res) => {
    res.json(res.data);
  });

  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

  let findData = () => {
    let city = weather.data.find((city, idx) => {
      return weather.city_name.toLowerCase() === searchQuery.toLowerCase();
    });
    return weather.data.map((item) => {
      return new Forecast(item);
    });
  };
  res.json(findData());
};

module.exports = DataAPI;
