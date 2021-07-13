const express = require('express');
const router = express.Router();
const queryString = require('query-string');
const url = require('url');
const axios = require('axios');
let FavoriteMovie = require('../models/FavoriteMovie.js');

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

/* Favorite movies */
router.get('/getFavorites/:userId',(req,res)=>{
	let userId = req.params.userId;
	FavoriteMovie.find({userId: userId},(err, data)=>{
		if(err){
			res.send(JSON.stringify({'status':'failed','message':'Error while retreiving favorite movies'}));
		}
		else{
			res.send(JSON.stringify({'status':'success','data':data}));
		}
		
	});
});

router.post('/addFavorite',(req,res)=>{
	FavoriteMovie.find({userId: req.body.userId, imdbID: req.body.imdbId},(err, data)=>{
		if(err){
			res.send(JSON.stringify({'status':'failed', 'message':'Error while adding favorite movie'}));
		}
		else if(data.length == 0){
			let newFavoriteMovie = new FavoriteMovie({Title: req.body.title, Year: req.body.year, Poster: req.body.poster, imdbID: req.body.imdbId, userId: req.body.userId});
			newFavoriteMovie.save((err)=>{
				if(err) {
					res.send(JSON.stringify({'status':'failed', 'message':'Error while saving favorite movie to database'}));
				}
				else{
					res.send(JSON.stringify({'status':'success'}));
				}
			});
		}
		else{
			res.send();
		}
	});
});
router.post('/removeFavorite',(req,res)=>{
	FavoriteMovie.deleteOne({imdbID: req.body.imdbID},(err, data)=>{
		if(err){
			console.log(err)
			res.send(JSON.stringify({'status':'failed', 'message':'Error while removing favorite movie'}));
		}
		else{
			res.send(JSON.stringify({'status':'success'}));
		}
	});
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