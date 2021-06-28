const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const port = 8888;
const wheatherData = require('../data/weather.json')

app.get('/', (req, res) => {
    res.send("Welcome")
})
app.get('/wheather', (req, res) => {
    res.json({
        lat: wheatherData.lat,
        long: wheatherData.long,
        searchQuery: ""
    })

})

app.listen(port, () => console.log(`server is running on prot ${port}`))