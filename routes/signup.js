const express = require('express');
const router = express.Router();
const SignupController = require('../controller/signup')

router.get("/", SignupController.Signup);
router.post("/", SignupController.Signupuser);
module.exports=router;