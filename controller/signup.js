const User = require("../models/user");
const mongoose = require("mongoose");


function Signup(req,res){
    res.render('index' , {title:"signup"});
};
exports.Signup = Signup;


exports.Signupuser = async function Signupuser(req,res){
  // res.send("hi");
  let email = req.body.email1;
  let USER1 = await(User.findOne({email:email}));
  console.log(USER1);
  if(!USER1){
    User.create({
      email:req.body.email1,
      password:req.body.pass1
     })
     res.send(`you signed up with ${email} `);
  }else{
    console.log("uswer wxists");
    res.render('index',{error:"user exists" ,title:"signup" });
   
  }
   
 };

//  const user = new User(
//   {email : req.body.email1 ,
//   password : req.body.pass1}
//  )
//  user.create()
//   .then(() => {
//     res.status(200).send('User registered successfully');
//   })
//   .catch((error) => {
//     console.error("Error saving user:", error);
//     res.status(500).send('Internal server error');
//   });