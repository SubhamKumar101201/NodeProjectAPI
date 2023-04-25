const mongoose=require("mongoose");
 

mongoose.connect("mongodb+srv://subhamDB:S21b8a13@cluster0.avz0ce7.mongodb.net/test")
.then(()=>{
    console.log("mongodb connected!!")
}).catch((e)=>{
    console.log(e)
})


