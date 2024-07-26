const express = require("express");
const router = express.Router();

const {
    saveInfoCropRec,
    saveLoansData,
    saveFertilizerRec
} = require("../controllers/DataCollection");


const { auth, isUser } = require("../middlewares/auth");


router.post("/saveInfoCropRec", auth, isUser, saveInfoCropRec);
router.post("/saveLoansData", auth, isUser, saveLoansData);
router.post("/saveFertilizerData", auth, isUser, saveFertilizerRec);

module.exports = router;