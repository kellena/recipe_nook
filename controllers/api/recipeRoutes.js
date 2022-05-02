const router = require('express').Router();
// const Recipe = require('../../models/recipes');

// GET all recipes
router.get('/', async (req, res) => {

    try {
        // const recipeData = await Recipe.findAll({});
        // // console.log(recipeData);
        // const plainData = Data.map(stu => stu.get({plain:true}))
        res.render('dish')
    } catch (err) {
        res.status(500).json(err);
    }
});


// router.post('/', async (req, res) => {
//     try {
//         const studentData = await Student.create({
//             studentname: req.body.s_name,
//             email: req.body.s_email
//         });
//         res.status(200).json(studentData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });


module.exports = router;