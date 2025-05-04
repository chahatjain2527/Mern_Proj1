const express = require('express');
const app = express();
const ConnectDb = require('./config/db');
const User = require("./models/UserModels");
const cors = require("cors");
require("dotenv").config();
ConnectDb();
const port = 5000;
// Middleware
app.use(cors());
app.use(express.json());

app.get("/api/users", async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        console.log(err);
    }
});
  
app.post("/createUser", async (req,res)=>{
    try {
        console.log("body ",req.body);
        await User.create({name:req.body.name, email:req.body.email, age: req.body.age});
        res.json({msg:"User Created"});
    } catch (error) {
        console.log(error);
    }
});

app.delete("/deleteUser", (req,res)=>{
    try{
        User.findByIdAndDelete()
    }
    catch{

    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });