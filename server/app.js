const express = require("express");
const app = express();
require("env2")(".env");
const path = require("path");
const router = require("./controller/index");
const compression = require("compression");
app.use(compression());
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("port", process.env.PORT || 1596);

app.use(router); 
module.exports = app;
