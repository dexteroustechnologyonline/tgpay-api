const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const { sendUserToken } = require("../utils/jwtToken");


exports.RegisterUser = catchAsyncErrors(async (req, res, next) => {
  try {
  
    const user = await User.create(req.body);
    if(!user){
      return res.status(501).json({
        success: false,
        message: "user not created",
      });
    }

    res.status(201).json({
      success: true,
      user,
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

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findOne({ mobile: req.body.mobile });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "user not found",
      });
    }
    const name = user.name;
    const clientid = user._id;
    const email = user.email;
    const agentId = user.agentId;
    const mobile = user.mobile;

    res.status(200).json({
      success: true,
      name,
      clientid,
      email,
      agentId,
      mobile,
      user,
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


exports.EditClientbyClientId = catchAsyncErrors(async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "user not found",
      });
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      user: user,
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

exports.clentbyphonenumber = catchAsyncErrors(async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.params.mobilenumber });
    res.status(200).json({
      success: true,
      user: user,
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

exports.mobileExist = catchAsyncErrors(async (req, res, next) => {
  try {
    let user = await User.findOne({ mobile: req.params.mobile });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "new mobile number",
      });
    }
    const name = user.name;
    const clientid = user._id;
    const email = user.email;
    

    return res.status(200).json({
      success: true,
      message: " mobile number already exits",
      name,
      clientid,
      email,
      user
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

exports.emailExist = catchAsyncErrors(async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "new email",
      });
    }

    return res.status(200).json({
      success: true,
      message: " email already exist",
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

exports.getAllUser = catchAsyncErrors (async(req,res) =>{
  try {
      const users = await User.find();
      res.status(200).json({
          success: true,
          users:users
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