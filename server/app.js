const express = require('express');
const app =express();
require('env2')('.env');
const path = require('path');
const router = require('./controller/index')
const compression = require('compression');
app.set('port',process.env.PORT ||5253);
app.use(compression());
app.use(router)
app.use(express.static(path.join(__dirname,'..','public')));
module.exports=app;