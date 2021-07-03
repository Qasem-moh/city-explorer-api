const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(cors());
require("dotenv").config();

/*************************** */
const weather = require("../data/weather.json");
let WeatherDataController = require("./controller/weather.controller");
let Movies = require("./controller/Movies.controller");
let DataAPI = require("./controller/APiData.controller");

/*endPoint to get data weather */
app.get("/weather", WeatherDataController);
app.get("/movies", Movies);
app.get("/APiData", DataAPI);
/*********************************** */

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(8000, () => console.log("Server is running"));
