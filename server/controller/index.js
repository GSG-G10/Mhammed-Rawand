const router = require("express").Router();
const searchFor = require("./searchFor");
const { serverError, error } = require("./error");
router.get("/input/:q", searchFor);
router.use(error);
router.use(serverError);
module.exports = router;
