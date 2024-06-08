const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/BagSite")
  .then(function () {
    console.log("server is running fine");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection;