const  express = require("express")
const app = express()
const mongoose = require("mongoose")
const helmet = require("helmet")
// const cluster = require("cluster")
const morgon = require("morgan")
const  config = require("dotenv")
// const dotenv = require("dotenv")
const getuser = require("./routes/users")
const getuserr = require("./routes/auth")
const postuser = require("./routes/posts")
const multer = require('multer')
const path = require('path')
// dotenv.config()
  mongoose.connect("mongodb://127.0.0.1:27017",()=>{
    console.log("connected the mongodb")
  })
  
app.use("/image2",express.static(path.join(__dirname,"public/image2")));
  //middlewere 
app.use(express.json());
app.use(helmet());
app.use(morgon("common"));
// for file upload karne ke liye

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image2");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users",getuser);
app.use("/api/auth",getuserr);
app.use("/api/posts",postuser)

app.listen(8800,()=>{
    console.log("backend server back server is readdy")
})