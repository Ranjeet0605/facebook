
const Users = require("../models/Users");
const router = require("express").Router();
const bcrypt = require("bcrypt")

//register
router.post("/register",async(req,res)=>{
    try{
const salt = await bcrypt.genSalt(10)
const hshePassword = await bcrypt.hash(req.body.password, salt)
// create user
    const newuser =  new Users({
        username:req.body.username,
        email:req.body.email,
        password:hshePassword,
    })
    
        // save user and return response
        const result = await newuser.save()
         res.status(200).json(result)
    } catch(err){
        res.status(500).json(err)
    }


   
})
//login
    router.post("/login",async(req,res)=>{
        try{
// email valid hai ki nahi
const findresult = await Users.findOne({email:req.body.email})
!findresult && res.status(404).json("user not found")
//check password valid is not 
const validPassword = await bcrypt.compare(req.body.password, findresult.password)
       !validPassword && res.status(400).json("User password in not valid")
       res.status(200).json(findresult)
} catch(err){
           res.status(500).json(err)
        }
    });
 
 module.exports = router