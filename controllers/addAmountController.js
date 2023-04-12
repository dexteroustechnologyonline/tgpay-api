
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Addamount = require("../models/addAmountModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createPayment= catchAsyncErrors(async (req, res, next)=>{
  try {
    const addamount = await Addamount.create(req.body);
    res.status(201).json({
      success:true, 
      addamount
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

exports.getAllPayment = catchAsyncErrors (async(req,res) =>{
    try {
        const addamounts = await Addamount.find();
        res.status(200).json({
            success: true,
            addamounts:addamounts
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

exports.DeleteAddAmount = catchAsyncErrors(async (req, res, next) => {
  try {
    let addamount = await Addamount.findById(req.params.id);
    if (!addamount) {
      return res.status(500).json({
        success: false,
        message: "Addamount not found",
      });
    }
    await addamount.remove()
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

exports.UpdateAmount = catchAsyncErrors(async (req, res, next) => {
  try {
    let addamount = await Addamount.findById(req.params.id);
    if (!addamount) {
      return res.status(500).json({
        success: false,
        message: "Addamount not found",
      });
    }
    addamount = await Addamount.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      addamount:addamount,
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



