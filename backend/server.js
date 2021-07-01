const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios')
app.use(cors());
require("dotenv").config();
const weather = require('../data/weather.json');
app.get('/', (req, res) => {
    res.send('Hello World')
})



/*endPoint to get data weather */

app.get('/weather', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery
    let findData = () => {
        return weather.data.map(item => {
            return new Forecast(item)
        })
    }
    res.json(findData())
})
//*Api get data from APi */
app.get('/APiData', (req, res) => {
    let URL = `http://api.weatherbit.io/v2.0/history/daily?key=342d733fdde44ed882595a15149cb170&lat=38.123&lon=-78.543&start_date=2021-06-25&end_date=2021-06-26`
    let weatherAPIAxios = axios.get(URL).then(res => {
        res.json(res.data)
    })

    let lat = req.query.lat
    let lon = req.query.lon
    let searchQuery = req.query.searchQuery

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


//

app.get('/movies',(req,res)=>{
    let AllMovies;
    let query=req.query.query;
    let URLMovies = `https://api.themoviedb.org/3/search/movie?api_key=6ded6278de53984ecef7b29d7676a2cd&query=${query}`;
    let ResponceMovies=axios.get(URLMovies).then(response=>{
        AllMovies=response.data.results;

        let renderMovies=AllMovies.map(item=>{
            return new Movies(item)
        })
        res.json(renderMovies)
        if(renderMovies===0){
            res.status(500).send("OOPs")
        }
    })

})




class Forecast {
    constructor(weatherData) {
        this.valid_date = weatherData.valid_date;
        this.description = weatherData.weather.description;
    }
}

class Movies{
    constructor(moviesData){
        this.title=moviesData.original_titile,
        this.votes=moviesData.vote_count
        this.img = 'http://image.tmdb.org/t/p/w342'+moviesData.poster_path
    }
}
app.get("*", (req, res) => {
    res.status(404).send("page not found");
});



app.listen(8000, () => console.log('Server is running'))