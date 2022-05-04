const router = require('express').Router();

//const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./usersRoutes.js');
const edamamRoutes = require('./edamamRoutes');

//router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);
router.use('/edamam', edamamRoutes);

module.exports = router;