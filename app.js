const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose-connection.js")
const ownersRouter = require("./routes/ownerRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productRouter.js");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);



app.listen(3000, function(req,res){
    console.log("Port is working well");
});