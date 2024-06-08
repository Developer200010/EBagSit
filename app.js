const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose-connection.js")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

