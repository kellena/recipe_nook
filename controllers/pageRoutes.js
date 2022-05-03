const router = require('express').Router();
// const Dish = require('../models/Dish');

router.get('/', async (req, res) => {
  res.render("homepage")
  });

router.get('/login', async (req, res) => {
  res.render("login")
  });

router.get('/signup', async (req, res) => {
  res.render("signup")
  });

module.exports = router;