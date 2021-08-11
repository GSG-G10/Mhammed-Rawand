const path = require('path')
const error = (req,res)=>{
    res.status(404).sendFile(__dirname,'..','..','public','404.html')
}
const serverError = (req,res)=>{
    res.status(500).sendFile(__dirname,'..','..','public','500.html')
}
module.exports={error,serverError};