const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const cors = require('cors');
require('dotenv').config();

/*CORS*/
app.use(cors());

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