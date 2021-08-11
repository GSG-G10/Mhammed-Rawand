require("env2")(".env");
const express = require("express");
const path = require("path");
const compression = require("compression");
const router = require("./controller/index");
const app = express();
app.set("port", process.env.PORT || 1596);
app.use(compression());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json())
app.use(router); 
module.exports = app;
