const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");
// const dotenv = require("dotenv").config();
mongoose
  .connect(`${config.get("MONGO_URL")}/BagSite`)
  .then(function () {
    ("server is running fine");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;