const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullName:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    product:{
        type:Array,
        default:[],
    },
    picture:String,
    gstIn:String
});

module.exports = mongoose.Schema("owner", ownerSchema);