const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        phone:{type:Number,required:true},
        rollno:{type:Number,required:true},
        password:{type:String,required:true}
    }
)

const StudentModel=new mongoose.model("ptr_student",studentSchema)

module.exports = StudentModel;