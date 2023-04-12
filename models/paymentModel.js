const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const paymentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter  name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    // unique: [true, "email already exist"],
  },
  mobile: {
    type: String,
    required: [true, "Please provide mobile"],
    // unique: [true, "password already exist"],
  },
  remark: {
    type: String,
    default:"Optional"
  },
  amount:{
    type: Number,
    required: [true, "Please provide amount"],
  },

  paymentGetway: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Payment", paymentSchema);
