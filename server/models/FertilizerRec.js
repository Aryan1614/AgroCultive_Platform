const mongoose = require("mongoose");

const FertilizerRecSchema = new mongoose.Schema(
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
        SoilType:{
            type:String,
            required: true,
        },
        CropType:{
            type:String,
            required: true,
        },
        RecFertilizer:{
            type: String,
            required: true,
        }
    }
);

module.exports = mongoose.model("FertilizerRec", FertilizerRecSchema);