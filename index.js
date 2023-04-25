//get all user information
//import express,knexdb
const express = require("express");
// const mongo=require("mongoose");
const router = require("./routes/studentRoutes");
// mongo.connect("mongodb://127.0.0.1:27017/students")
// .then(()=>{
//     console.log("database connected");
// }).catch((err)=>{
//     console.log(err);
// })
//initialize
const mongoose=require("mongoose");
 require("./db/studentDB")

// mongoose.connect("mongodb://127.0.0.1:27017/students").then(()=>{
//     console.log("mongodb connected!!")
// }).catch((e)=>{
//     console.log(e)
// })
const app=express();
//declare port
app.listen(8008,console.log("Server is running on port 8008!!"))
app.use(express.json());
//routes 
//for acessing the whole database information
app.use(router)