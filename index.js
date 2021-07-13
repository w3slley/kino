const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

/*CORS*/
app.use(cors());

/*Body parser middleware*/
app.use(bodyParser.urlencoded({extended: false}));

// Establishing MongoDB connection
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB database!');
});

app.use(express.static(path.join(__dirname,'frontend/build')));

app.get('/', (req, res)=>{
  res.sendFile('frontend/build/index.html', {
    root: path.join(__dirname, './')
  });
});

/*Movie routes*/
app.use('/movies', require('./routes/movies.js'));

/*Users routes*/
app.use('/users', require('./routes/users.js'));


app.listen(port, ()=>{
  console.log(`Server started at port ${port}!`);
})