const router = require('express').Router();
const Dish = require('../models/Dish');

router.get('/', async (req, res) => {
  const dishData = await Dish.findAll().catch((err) => { 
      res.json(err);
    });
      const dishes = dishData.map((dish) => dish.get({ plain: true }));
      res.render('all', { dishes });
    });

module.exports = router;