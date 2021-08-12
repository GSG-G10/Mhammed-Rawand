const path = require("path");
const error = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "..", "public", "404.html"));
};
const serverError = (err, req, res, next) => {
  res.status(500).sendFile('OOPS , server has a trouble,Execuse US')
}
module.exports = { error, serverError };
