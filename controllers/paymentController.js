
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Payment = require("../models/paymentModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createPayment= catchAsyncErrors(async (req, res, next)=>{
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json({
      success:true, 
      payment
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
        const payments = await Payment.find();
        res.status(200).json({
            success: true,
            payments:payments
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

