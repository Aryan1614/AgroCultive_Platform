const mongoose = require('mongoose');


const CropRecSchema = new mongoose.Schema(
    {
        Nitrogen:{
            type:String,
            required: true,
        },
        Phosphorus:{
            type:String,
            required: true,
        },
        Potassium:{
            type:String,
            required: true,
        },
        Temp:{
            type:String,
            required: true,
        },
        Humidity:{
            type:String,
            required: true,
        },
        Ph:{
            type:String,
            required: true,
        },
        RainFall:{
            type:String,
            required: true,
        },
        RecCrop:{
            type: String,
            required: true,
        }
    }
);


module.exports = mongoose.model("CropRec", CropRecSchema);