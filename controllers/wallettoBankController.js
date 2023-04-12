
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const WalletToBank = require("../models/walletToBankModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");



exports.createWallettoBank= catchAsyncErrors(async (req, res, next)=>{
  try {
    const walletToBank = await WalletToBank.create(req.body);
    res.status(201).json({
      success:true, 
      walletToBank
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

exports.getAllWallettoBank= catchAsyncErrors (async(req,res) =>{
    try {
        const walletToBanks = await WalletToBank.find();
        res.status(200).json({
            success: true,
            walletToBanks:walletToBanks
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

exports.getWallettoBankUserById = catchAsyncErrors (async(req,res) =>{
    try {
        const walletToBank = await WalletToBank.find({userId: req.params.userId});
        res.status(200).json({
            success: true,
            walletToBank:walletToBank
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




exports.UpdateWallettoBank = catchAsyncErrors(async (req, res, next) => {
  try {
    let walletToBank = await WalletToBank.findById(req.params.id);
    if (!walletToBank) {
      return res.status(500).json({
        success: false,
        message: "Banktransaction not found",
      });
    }
    walletToBank = await WalletToBank.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      walletToBank:walletToBank,
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
