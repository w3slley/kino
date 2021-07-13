const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

let User = require('../models/User.js')

//Login process
router.post('/login', function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) throw (err);
    if (!user) {
      res.send({'status':'failed','message':'Invalid information'});
    }
    bcrypt.compare(req.body.password, user.password, (err, valid) => {
      if (err) throw(err);
      console.log(valid);
      if (valid) {
        res.send({'status':'success', 'user': {'id': user._id, 'name':user.name,'email':user.email,'username':user.username}});
      }
      else {
        res.send({'status':'failed','message':'Invalid Information'});
      }
    });
  });
})



//Logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
//Register process
router.post('/register', (req, res) => {
  let name = req.body.name
  let email = req.body.email
  let username = req.body.username
  let password = req.body.password
  let confirmPassword = req.body.confirmPassword
  
  bcrypt.hash(password, 10, (err, hash) => {//Hashing password
    let newUser = new User({ name: name, email: email, username: username, password: hash });
    newUser.save((err) => {
      if (err) return console.error(err);
    })

    res.send({'status':'success'});
  });
});

//access control function
//I already have this function in the posts.js. I have to find another way to do this
function protected(req, res) {
  if (res.locals.user) {
    return next()
  }
  else {
    res.redirect('/login')
  }
}

module.exports = router