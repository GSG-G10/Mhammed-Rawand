const { response } = require('express');
const fetch = require('node-fetch');

const apiKey = process.env.API_KEY;
const searchFor =(req,res,next)=>{
  console.log("req", req);
    // fetch(`https://api.unsplash.com/search/photos?query=${req.body.name}&client_id=${apiKey}`)
    //   .then((result) => result.json())
    //   .then((result) => res.json(result)).catch((err)=>console.log(err));
    res.send(`<h1>hello</h1>`)
  };
module.exports=searchFor;