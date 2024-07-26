const CropRec = require("../models/CropRec");
const FertilizerRec = require("../models/FertilizerRec");
const Loan = require("../models/Loans");
const User = require("../models/User");


exports.saveInfoCropRec = async(req,res) => {
    try{

        const {
            Nitrogen,
            Phosphorus,
            Potassium,
            Temp,
            Humidity,
            Ph,
            RainFall,
            RecCrop
        } = req.body;

        if(!Nitrogen || !Phosphorus || !Potassium || !Temp || !Humidity || !Ph || !RainFall || !RecCrop){
            return res.status(400).json({
                success: false,
                message: "Data Incomeplete"
            });
        }

        const userID = req.user.id;
        const user = await User.findById(userID);

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User Not Found!"
            });
        }

        const CropData = await CropRec.create({
            Nitrogen,
            Phosphorus,
            Potassium,
            Temp,
            Humidity,
            Ph,
            RainFall,
            RecCrop
        });

        const newUser = await findByIdAndUpdate(
            {userID},
            {
                $push:{
                    CropData: CropData._id,
                }
            },
            {new: true}
        ).populate("CropData");

        return res.status(200).json({
            success: true,
            message: "Data Saved Successully",
            newUser,
        })

    } catch(e){
        console.log(e);
        return res.status(500).json({
            success: false,
            message: "Something went While Saving Info Of Crop Recommendation"
        });
    }
}


exports.saveLoansData = async(req,res) => {
    try{

        const {
            Area,
            AnnualIncome,
            landContour,
            LoanReqAmount,
            DistFromRoad,
            SoilType,
            MaxLoanAmount,
            PercentageOfLoanApprove
        } = req.body;

        const userID = req.user.id;

        if(!Area || !AnnualIncome || !landContour || !DistFromRoad || !SoilType || !MaxLoanAmount || !PercentageOfLoanApprove || !LoanReqAmount || !userID){
            return res.status(400).json({
                success: false,
                message: "Data Incomeplete"
            });
        }

        const user = await User.findById(userID);

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User Not Found!"
            });
        }

        const id = JSON.stringify(req.user.id);

        const LoanData = await Loan.create({
            id,
            Area,
            AnnualIncome,
            landContour,
            LoanReqAmount,
            DistFromRoad,
            SoilType,
            MaxLoanAmount,
            PercentageOfLoanApprove
        });

        const newUser = await findByIdAndUpdate(
            {userID},
            {
                $push:{
                    LoansData: LoanData._id,
                }
            },
            {new: true}
        ).populate("LoansData");

        return res.status(200).json({
            success: true,
            message: "Data Saved Successully",
            newUser,
        });

    } catch(e){
        console.log(e);
        return res.status(500).json({
            success: false,
            message: "Something went While Saving Info Of Crop Recommendation"
        });
    }
}


exports.saveFertilizerRec = async(req,res) => {
    try{

        const {
            Nitrogen,
            Phosphorus,
            Potassium,
            Temp,
            Humidity,
            SoilType,
            CropType,
            RecFertilizer
        } = req.body;

        if(!Nitrogen || !Phosphorus || !Potassium || !Temp || !Humidity || !SoilType || !CropType || !RecFertilizer){
            return res.status(400).json({
                success: false,
                message: "Data Incomeplete"
            });
        }

        const userID = req.user.id;
        const user = await User.findById(userID);

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User Not Found!"
            });
        }
        
        const id = JSON.stringify(userID);

        const FertilizerData = await FertilizerRec.create({
            id,
            Nitrogen,
            Phosphorus,
            Potassium,
            Temp,
            Humidity,
            SoilType,
            CropType,
            RecFertilizer
        });

        const newUser = await findByIdAndUpdate(
            {userID},
            {
                $push:{
                    FertilizerData: FertilizerData._id,
                }
            },
            {new: true}
        ).populate("FertilizerData");

        return res.status(200).json({
            success: true,
            message: "Data Saved Successully",
            newUser,
        })

    } catch(e){
        console.log(e);
        return res.status(500).json({
            success: false,
            message: "Something went While Saving Info Of Crop Recommendation"
        });
    }
}