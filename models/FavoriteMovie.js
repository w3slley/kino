let mongoose = require('mongoose');

let favoriteMovieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  imdbID: String,
  Poster: String,
  userId: String
});

let favoriteMovie = mongoose.model('FavoriteMovie', favoriteMovieSchema);//This is how you create model in mongodb
module.exports = favoriteMovie;