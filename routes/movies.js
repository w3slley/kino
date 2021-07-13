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
	let response;
	try{
		response = await axios({
			method: 'GET',
			url: `http://www.omdbapi.com/?s=${searchMovie}&type=movie&page=${pageNumber}&apikey=${process.env.OMDB_API_KEY}`
		});
	}
	catch(err){
		console.error(err);
	}

	let movies = response.data;

	res.setHeader('Content-Type','application/json');
	res.send(JSON.stringify(movies));
});

//Display info about a particular movie
router.get('/:imdbId', async (req, res)=>{
	let movieId = req.params.imdbId;
	if(movieId.substring(0,2) != 'tt' || movieId.length != 9){
		res.send(JSON.stringify({'status': 'failed', 'message': 'Invalid IMDB movie id.'}));
	}
	let movieData;
	try{
		response = await axios({
			method: 'GET',
			url: `http://www.omdbapi.com/?i=${movieId}&type=movie&apikey=${process.env.OMDB_API_KEY}`
		});
		movieData = response.data;
		movieData['YoutubeId'] = await getYoutubeId(movieData.Title, movieData.Year);
		//movieData['YoutubeId'] = 'upwf8RsyNqQ'; //let this here till I can make requests to the youtube api again
	}
	catch(err){
		console.error(err);
	}
	
	
	res.send(movieData);
})

async function getYoutubeId(movieName, year){
	let searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${movieName.replace(' ', '+')}+${year}+official+trailer&type=video&maxResults=5&key=${process.env.YOUTUBE_API_KEY}`;
	const response = await axios(searchUrl);
	const movies = response.data.items;

	return videoId = movies[0].id.videoId;
}

module.exports = router;