require("dotenv").config();
const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
const path = require("path");
const bcrypt = require("bcrypt")
const fileUpload = require('express-fileupload')
const jsonwebtoken = require('jsonwebtoken')
const flash = require('connect-flash');
const date = require('date-and-time')

const pool = require("./config/database");
var multer = require('multer');
const frontendRouter = require("./routes/frontend/home")

const adminRouter = require("./routes/backend/admin");


const { title } = require("process");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");




app.use(flash());

const now = new Date();
const value = date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log("current date and time : " + value)
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    name: 'myCookie',
    cookie: { maxAge: oneDay },
    secret: "app",
    name: "app",
    resave: true,
    saveUninitialized: true,
    unset: 'destroy'
    // cookie: { maxAge: 6000 } /* 6000 ms? 6 seconds -> wut? :S */
  })
);

app.use(express.static(__dirname + "/views/public"));
app.use(fileUpload());
if (pool) {
  console.log("Connection Success");
} else {
  console.log("Cant connect to db, Check ur db connection");
}
// Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, './public/Imagess')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

var upload = multer({
  storage: storage
});




app.use("/",frontendRouter)//home page
app.use("/",adminRouter)// admin 
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running at port 8000..", process.env.APP_PORT);
});
 1
 