const Bankdetails = require("../models/bankDetailsModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createBankDetail = catchAsyncErrors(async (req, res, next) => {
  try {
    const bankdetails = await Bankdetails.create(req.body);
    res.status(201).json({
      success: true,
      bankdetails,
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

exports.getAllBankDetails = catchAsyncErrors(async (req, res) => {
  try {
    const bankdetails = await Bankdetails.find();
    res.status(200).json({
      success: true,
      bankdetails: bankdetails,
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

exports.GetBankDetailsbyUserId = catchAsyncErrors(async (req, res, next) => {
  try {
    console.log(req.params.id);
    let bankdetails = await Bankdetails.find({ userId: req.params.id });
    
    if (!bankdetails) {
      return res.status(500).json({
        success: false,
        message: "address not found",
      });
    }
    return res.status(200).json({
      success: true,
      bankdetails,
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

exports.DeleteBankDetails = catchAsyncErrors(async (req, res, next) => {
  try {
    let bankdetail = await Bankdetails.findById(req.params.id);
    if (!bankdetail) {
      return res.status(500).json({
        success: false,
        message: "bankdetail not found",
      });
    }
    await bankdetail.remove();
    res.status(200).json({
      success: true,
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
