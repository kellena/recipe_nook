const { query } = require('express');

const router = require('express').Router();
const axios = require('axios').default;
require('dotenv').config();

router.get('/:searchterm', async (req, res) => {
    var queryURL = `https://api.edamam.com/search?q=${req.params.searchterm}&app_id=${process.env.APP_ID}&app_key=${process.env.APIKEY}&imageSize=THUMBNAIL&to=10`;
    // console.log(queryURL);
    axios.get(queryURL)

<<<<<<< HEAD
    //.then(function (response) {
      // handle success
      //console.log(response.data)
=======
    // .then(function (response) {
    //   // handle success
    //   console.log(response.data)
>>>>>>> main
        .then(function (response) {
            // handle success
            let hits = response.data.hits;
            const recipeData =[];
            for (let i = 0; i < hits.length; i++) {
                const recipeObj = {
                    "label" : hits[i].recipe.label,
                    "image" : hits[i].recipe.image,
                    "uri" : hits[i].recipe.uri,
                    "ingredientLines" : hits[i].recipe.ingredientLines,
                    "dishType" : hits[i].recipe.dishType,
                    "cuisineType" : hits[i].recipe.cuisineType,
                }
                console.log(hits[i]);
                recipeData.push(recipeObj)
                // console.log(recipeData);


            }
            console.log(hits[i]);
            recipeData.push(recipeObj)
            // console.log(recipeData);

        }
        res.json(recipeData)

<<<<<<< HEAD
        })
        .catch(function (error) {
            // handle error
            
            console.log("oh fork, something went wrong");
        })
=======
        // console.log(response.data);
>>>>>>> main

    })
    .catch(function (error) {
        // handle error
        "oh fork, something went wrong"
        console.log(error);
    })

<<<<<<< HEAD

=======
// });
>>>>>>> main



module.exports = router;