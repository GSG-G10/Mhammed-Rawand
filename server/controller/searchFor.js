const { response } = require('express');
const fetch = require('node-fetch');
const path = require('path')
const apiKey = process.env.API_KEY;
const searchFor =(req,res)=>{

    fetch(`https://api.unsplash.com/search/photos?query=${req.query.q}&client_id=${apiKey}`)
      .then((result) => result.json())
      .then((result) => res.json(result))
      .catch((err)=>console.log(err));
     
      
  };

module.exports=searchFor;