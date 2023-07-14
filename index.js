const express = require('express')
const hbs = require('hbs')
var path = require('path');
const app = express()
const mongoose = require('mongoose');

const bodyParser = require('body-parser');



// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const SignupRouter = require('./routes/signup')

app.set('view engine', 'hbs')
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/signup", SignupRouter);
// router
// mongoose.set("strictQuery",false);
// const mongoDB = "mongodb+srv://rahulol:rw7vApAxCFw6LXMn@todolist.hxpy9gt.mongodb.net/myusers";
// Connect to MongoDB
mongoose.connect("mongodb+srv://rahulol:rw7vApAxCFw6LXMn@todolist.hxpy9gt.mongodb.net/myusers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.listen(3000);
module.exports=app;