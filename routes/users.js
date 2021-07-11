const express = require('express');
const router = express.Router();

router.post('/login', (req, res)=>{
  res.send('test')
});

router.post('/register', (req, res)=>{
  res.send('test-register')
});

module.exports = router;