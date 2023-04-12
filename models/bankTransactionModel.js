const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const bankTransactionSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        required: [true, "User Required"],
        ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter  name"],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, "Please provide mobile"],
      // unique: [true, "password already exist"],
    },
    remark: {
      type: String,
      default:""
    },
    transactionId: {
      type: String,
      default:""
    },
    statustext: {
      type: String,
      default:"Deposite"
    },
    totalamt:{
      type: Number,
      required: [true, "Please provide amount"],
    },
    transactioncost:{
      type: Number,
      required: [true, "Please provide transactioncost"],
    },
    amountafterDeduction:
    {
        type: Number,
        required: [true, "Please provide amountafterDeduction"],
      },
    gstontransaction:
    {
        type: Number,
        required: [true, "Please provide gstontransaction"],
      },
    cardType:{
        type:String,
        default:"Visa"
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model("Banktransaction", bankTransactionSchema);