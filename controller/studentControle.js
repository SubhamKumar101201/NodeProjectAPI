const StudentModel = require("../model/studentmodel");


async function allDetails(req,res){
    await StudentModel.find().then((result)=>{
        res.send({result:result})
    }).catch((e)=>{
        res.send(e)
    })
}
async function signup(req,res){
    const student= new StudentModel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        rollno:req.body.rollno,
        password:req.body.password
    })
     student.save().then(()=>{
        console.log("data insert successfully!!");
        res.send({message:"data inserted"})


    }
        
    ).catch((err)=>{
        console.log(err);
    })
}

module.exports={allDetails,signup}