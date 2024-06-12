const userModel = require("../models/user-model.js");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken.js");

module.exports.userRegister = async function(req,res){
    try {
        
        let { fullName, email, password } = req.body;
        if(!fullName,!email,!password) return res.status(500).send("something went wrong!");
        const userExist = await userModel.findOne({email:email});
        if(userExist) return res.status(502).send("already have an account");
        bcrypt.genSalt(10,function(err, salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if(err) return res.status(500).send("something went wrong");
                else{
                    const user = await userModel.create({
                        fullName,
                        email,
                        password:hash,
                      });
                      const token=generateToken(user);
                      res.cookie("token", token);
                      res.status(200).send(user);
                }
            })
        })
        
      } catch (error) { res.send(error.message) }
    };


module.exports.userLogin = async function(req,res){
    let{email,password} = req.body;
    const userExist = await userModel.findOne({email:email});
    if(!userExist) return res.status(500).send("user doesn't exist");
    else{
        bcrypt.compare(password, userExist.password, function(err,result){
            if(result){
                const token = generateToken(userExist);
                res.cookie("token", token);
                res.status(500).send("used logged in");
            }
        })
    }
    console.log(userExist);
}