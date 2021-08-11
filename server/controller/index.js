const router = require("express").Router();
// const getHomePage = require("./getHomePage");
const searchFor = require("./searchFor");
const { serverError, error } = require("./error");

// router.get("/home", getHomePage);
router.get("/search", searchFor);
    router.use(serverError);
    router.use(error);

module.exports = router;
