const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model.js");

module.exports.isLoggedIn = async function (req, res) {
  if (!req.cookies.token) {
    req.flash("error", "you need to login first");
    return res.redirect("/");
  }
  try {
    const decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .fineOne({ email: decode.email })
      .select("-password");
    req.user = user;
    next();
  } catch (error) {
    req.flash("error", "something went wrong.");
    res.redirect("/");
  }
};
