let Movies = require("../models/Movies.model");

let GetMovies = (req, res) => {
  let AllMovies;
  let query = req.query.query;
  let URLMovies = `https://api.themoviedb.org/3/search/movie?api_key=6ded6278de53984ecef7b29d7676a2cd&query=${query}`;
  let ResponceMovies = axios.get(URLMovies).then((response) => {
    AllMovies = response.data.results;

    let renderMovies = AllMovies.map((item) => {
      return new Movies(item);
    });
    res.json(renderMovies);
    if (renderMovies === 0) {
      res.status(500).send("OOPs");
    }
  });
};

module.exports = GetMovies;
