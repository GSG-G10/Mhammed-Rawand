const fetch = require('node-fetch');
const path = require('path')
const apiKey = process.env.API_KEY;
const searchFor = (req, res, next) => {

  fetch(`https://api.unsplash.com/search/photos?query=${req.params.q}&client_id=${apiKey}`)
    .then((result) => result.json())
    .then((data) => res.json(data))

};

module.exports = searchFor;