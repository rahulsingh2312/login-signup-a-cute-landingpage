const User = require("../models/user");
const mongoose = require("mongoose");

function login(req,res){
    res.render('login' , {title:"login"});
};
exports.login = login;
// module.exports({ login });

exports.loginuser = async function loginuser(req,res){
   let email = req.body.email1;
   let password = req.body.pass1;
//    console.log(email)
//    console.log(password)
 let USER1 = await(User.find({email:email}));
console.log(USER1)
console.log(USER1.password)
   if(USER1[0].password===password){
        res.send("hi login " + email);
   }
   else{
    res.send("hyyyu");
   }
   
    // res.send("hi login");
};