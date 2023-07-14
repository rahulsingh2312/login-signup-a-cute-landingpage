const express = require('express');
const router = express.Router();
const Homepage = require('../controller/index')
router.get("/", Homepage.Home);
module.exports=router;