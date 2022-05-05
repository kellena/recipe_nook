const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render("homepage")
  });

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return;
  }
  res.render("login")
  });

router.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return;
  } else {
  res.render("signup")
  }
});

router.get('/loginReroute', async (req, res) => {
  if (req.session.loggedIn) {
    res.render("profilesearch")
  } else {
  res.redirect('/')
  }
});

module.exports = router;