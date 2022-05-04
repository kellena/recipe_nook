const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await User.create ({
      email: req.body.email,
      password: req.body.password
    })
    console.log(newUser)
    req.session.save (() => {
      req.session.userId = newUser.id;
      req.session.email = newUser.email;
      req.session.loggedIn = true;
      // res.redirect('/')
      res.json(newUser)
    });
  } catch (err) {
      res.status(500).json(err);
  }; 
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne ({
      where: {
        email: req.body.email,
      }
    })
    if (!user) {
      res.status(400).json({
        message: "No user found with that email."
      });
      return;
    }
    const validPassword = user.checkPassword (req.body.password)
    if (!validPassword) {
      res.status(400).json({
        message: "Wrong email/password"
      });
      return;
    }
    req.session.save (() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;
      res.json({user, message: "You are now logged in!"})
    });
  } catch (err) {
      res.status(400).json({message: "No user found"})
  }
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy (() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router;
