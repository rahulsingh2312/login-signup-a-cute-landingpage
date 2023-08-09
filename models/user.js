const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : { type : String , required : true ,minLength:3 , maxLength:100 },
    password : {type: String , required : true },
    name : {type: String },
    phone: {type: String }
});


module.exports= mongoose.model("user", userSchema);