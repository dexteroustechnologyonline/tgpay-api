
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Banktransaction = require("../models/bankTransactionModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");



exports.createBankTransaction= catchAsyncErrors(async (req, res, next)=>{
  try {
    const banktransaction = await Banktransaction.create(req.body);
    res.status(201).json({
      success:true, 
      banktransaction
  });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});

exports.getAllBankTransaction = catchAsyncErrors (async(req,res) =>{
    try {
        const banktransactions = await Banktransaction.find();
        res.status(200).json({
            success: true,
            banktransactions:banktransactions
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(400).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(500).json({
            success: false,
            massage: error._message,
            error:error
          });
    }
});

exports.getBankTransactionUserById = catchAsyncErrors (async(req,res) =>{
    try {
        const banktransactions = await Banktransaction.find({userId: req.params.userId});
        res.status(200).json({
            success: true,
            banktransactions:banktransactions
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(400).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(500).json({
            success: false,
            massage: error._message,
            error:error
          });
    }
});


exports.DeleteBankTnx = catchAsyncErrors(async (req, res, next) => {
  try {
    let banktransaction = await Banktransaction.findById(req.params.id);
    if (!banktransaction) {
      return res.status(500).json({
        success: false,
        message: "Banktransaction not found",
      });
    }
    await banktransaction.remove()
      res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});

exports.UpdateBankTnx = catchAsyncErrors(async (req, res, next) => {
  try {
    let banktransaction = await Banktransaction.findById(req.params.id);
    if (!banktransaction) {
      return res.status(500).json({
        success: false,
        message: "Banktransaction not found",
      });
    }
    banktransaction = await Banktransaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      banktransaction:banktransaction,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error:error
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error:error
    });
  }
});
