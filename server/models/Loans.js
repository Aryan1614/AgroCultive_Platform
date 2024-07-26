const mongoose = require("mongoose");

const LoansSchema = new mongoose.Schema(
    {   
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        Area:{
            type: String,
            require: true
        },
        AnnualIncome:{
            type: String,
            require: true
        },
        landContour:{
            type: String,
            required: true,
        },
        LoanReqAmount:{
            type: String,
            required: true,
        },
        DistFromRoad:{
            type: String,
            required: true,
        },
        SoilType:{
            type:String,
            required: true,
        },
        MaxLoanAmount:{
            type:String,
            required: true,
        },
        PercentageOfLoanApprove:{
            type:String,
            required: true
        }
    }
);

module.exports = mongoose.model("Loan", LoansSchema);