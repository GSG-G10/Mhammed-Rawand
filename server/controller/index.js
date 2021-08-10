const router = require('express').Router();
const getHomePage = require('./getHomePage');
const searchFor = require('./searchFor');
router.get('/home', getHomePage);
router.get('/search', searchFor);
// app.use(error handle)
module.exports =router;