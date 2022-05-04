const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

router.post('/', (req, res) => {
  console.log(req.body)
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(userData => {
      res.json(userData)
    }).catch(err => {
    res.status(400).json(err);
    console.log("error confirmed");
  })

});

module.exports = router;
