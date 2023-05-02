const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const bankdetailsSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "User Id Required"],
    ref: "User",
  },
  bankName: {
    type: String,
    // required: [true, "Please provide bank Name"],
    // unique: [true, "password already exist"],
  },
  accountHolderName: {
    type: String,
    // required: [true, "Please provide account Holder Name"],
    // unique: [true, "password already exist"],
  },

  accountHolderNumber: {
    type: String,
    // required: [true, "Please provide account Holder Number"],
    // unique: [true, "password already exist"],
  },
  bankAccount: {
    type: String,
    required: [true, "Please enter Bank Account"],
    // unique: [true, "Bank Account already exist"],
  },
  ifscCode: {
    type: String,
    required: [true, "Please provide ifscCode"],
    // unique: [true, "password already exist"],
  },
  bankBranchName: {
    type: String,
    trim: true,
    // required: true,
  },

  fund_account_id: {
    type: String,
    default: "",
  },

  icon: {
    type: String,
    // required: [true, "Please provide icon"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bankdetails", bankdetailsSchema);
