const express = require('express');
const router = express.Router();
const queryString = require('query-string');
const url = require('url');
const axios = require('axios');

// Display movies from OMDB - receives movie title and page number
router.get('/search', async (req, res)=>{
	const urlString = url.parse(req.url);
	let query = queryString.parse(urlString['search']);
	let searchMovie = (query.q).replace(' ', '+');
	let pageNumber = query.p;
	let searchMoviesUrl = `http://www.omdbapi.com/?s=${searchMovie}&type=movie&page=${pageNumber}&apikey=74e8c0f5`;
	let response;
	try{
		response = await axios(searchMoviesUrl);
	}
	catch(err){
		console.error(err);
	}

	let movies = response.data.Search;

	res.setHeader('Content-Type','application/json');
	res.send(JSON.stringify(movies));
});

//Display info about a particular movie
router.get('/:imdbId', async (req, res)=>{
	let movieId = req.params.imdbId;
	if(movieId.substring(0,2) != 'tt' && movieId.length != 9){
		res.send(JSON.stringify({'status': 'failed', 'message': 'Invalid IMDB movie id.'}));
	}

	let searchMoviesUrl = `http://www.omdbapi.com/?i=${movieId}&type=movie&apikey=74e8c0f5`;
	let response;
	try{
		response = await axios(searchMoviesUrl);
	}
	catch(err){
		console.error(err);
	}
	
	let movieData = response.data;
	movieData['YoutubeId'] = await getYoutubeId(movieData.Title);
	res.send(movieData);
	//res.send('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+youtubeId+'" frameborder="0" allowfullscreen></iframe>');
})

async function getYoutubeId(movieName){
	let searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${movieName.replace(' ', '+')}+official+trailer&type=video&maxResults=5&key=${process.env.YOUTUBE_API_KEY}`;
	const response = await axios(searchUrl);
	const movies = response.data.items;

	return videoId = movies[0].id.videoId;
}

module.exports = router;