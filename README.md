<p align="center">
  <a target="_blank" href="https://kinowebapp.herokuappp.com"><img width="150" src="images/logo.svg"></a>
</p>

# About Kino
On Kino you can easily find information on the movies you love!

## Features
- Search by movie title
- Highlight of movie information such as release date, awards, box office, among others
- Ratings by IMDB, Rotten Tomatoes and Metacritic
- Authentication system which allows creation of lists of favorite movies for quick look up

![](images/kino-image2.png)
![](images/hp.png)

## Tech stack
The web application was developed using Node.js and MongoDB on the back-end and React.js on the front end. The deployment was made using Heroku.

The [OMDB](https://www.omdbapi.com/) API was used to retreive all the movie information and the YouTube API was used to get the trailer for each movie.

The authentication system was implemented on the browser using `LocalStorage`.
