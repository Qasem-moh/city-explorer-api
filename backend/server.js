const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
require("dotenv").config();
const weather = require('../data/weather.json');

const PORt = process.env.PORT
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/weather', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery

    console.log(lat);
    console.log(lon);
    console.log(searchQuery);





    let findData = () => {

        let city = weather.data.find((city, idx) => {
            return weather.city_name.toLowerCase() === searchQuery.toLowerCase()
        })
        return weather.data.map(item => {
            return new Forecast(item)
        })
    }
    res.json(findData())
})

class Forecast {
    constructor(weatherData) {
        this.data = weatherData.valid_data;
        this.description = weatherData.weather.description;
    }
}
app.get("*", (req, res) => {
    res.status(404).send("page not found");
});



app.listen(process.env.PORT, () => console.log('Server is running'))