const { query } = require('express');

const router = require('express').Router();
const axios = require('axios').default;
require('dotenv').config();

router.get('/:searchterm', async (req, res) => {
    var queryURL = `https://api.edamam.com/search?q=${req.params.searchterm}&app_id=${process.env.APP_ID}&app_key=${process.env.APIKEY}&imageSize=THUMBNAIL&to=10`;
    // console.log(queryURL);
    axios.get(queryURL)
    .then(function (response) {
      // handle success
      console.log(response.data);

      res.json(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
});


module.exports = router;