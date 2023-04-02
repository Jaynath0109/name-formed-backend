const mongoose =require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true

    },
    gendar:{
    type:String,
        required:true
    },
    gendar:{
        type:Number,
            required:true,
            unique:true
        },
        age:{
            type:Number,
                required:true
               
            },
            password:{
                type:String,
                    required:true
                },

             confirmpassword :{
                type:String,
                    required:true

             }   


})



//now we need to create a colletion


const Register = new mongoose.model("Register",studentSchema);
module.exports = Register;