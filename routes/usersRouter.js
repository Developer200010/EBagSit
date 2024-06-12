const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model.js");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken.js");
const {userRegister, userLogin } = require("../controllers/authController.js");
// const {encryption} = require("../utils/encryption.js");

router.get("/", function(req,res){
    res.send("hey it's working");
});

router.post("/register",userRegister);
router.post("/login", userLogin );


module.exports = router;