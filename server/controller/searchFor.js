const { response } = require('express');
const fetch = require('node-fetch');

const apiKey = process.env.API_KEY;
const searchFor =(req,res,next)=>{
// const endPoint = `https://api.unsplash.com/search/photos?query=kiwi&client_id=${apiKey}`
// fetch(endPoint) .then((result) => result.json())
// .then((result) => res.json(result)).catch((err)=>console.log(err));
// }

    fetch(`https://api.unsplash.com/search/photos?query=${req.body.name}&client_id=${apiKey}`)
      .then((result) => result.json())
      .then((result) => res.json(result)).catch((err)=>console.log(err));
  };
module.exports=searchFor;