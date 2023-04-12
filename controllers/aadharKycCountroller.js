const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Aadharkyc = require("../models/aadharKyc");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createAadharKyc = catchAsyncErrors(async (req, res, next) => {
  try {
    const aadharkyc = await Aadharkyc.create(req.body);
    res.status(201).json({
      success: true,
      aadharkyc,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.GetAadharKycbyUserId = catchAsyncErrors(async (req, res, next) => {
  try {
    console.log(req.params.id);
    let aadharkyc = await Aadharkyc.find({ userId: req.params.id });

    if (!aadharkyc) {
      return res.status(500).json({
        success: false,
        message: "address not found",
      });
    }
    return res.status(200).json({
      success: true,
      aadharkyc,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});
