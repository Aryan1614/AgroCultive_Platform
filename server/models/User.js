const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required: true,
            trim:true,
        },
        lastName:{
            type:String,
            required: true,
            trim:true,
        },
        email:{
            type:String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        additionalDetails:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile"
        },
        CropData:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"CropRec"
            }
        ],
        FertilizerData:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"CropRec"
            }
        ],
        LoansData:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"CropRec"
            }
        ],
        token:{
            type:String,
        },
        resetPasswordExpires: {
            type: Date,
        },
        accountType:{
            type: String,
            enum:["Admin","User"],
            required: true,
        },
        image:{
            type: String,
        },
    }
);

module.exports = mongoose.model("User",userSchema);