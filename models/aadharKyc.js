const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const aadharkycSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "User Id Required"],
    ref: "User",
  },
  client_id: {
    type: String,
    default: "",
  },
  full_name: {
    type: String,
    default: "",
  },
  aadhaar_number: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  address: {
    country: {
      type: String,
      default: "",
    },
    dist: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    po: {
      type: String,
      default: "",
    },
    loc: {
      type: String,
      default: "",
    },
    vtc: {
      type: String,
      default: "",
    },
    subdist: {
      type: String,
      default: "",
    },
    street: {
      type: String,
      default: "",
    },
    house: {
      type: String,
      default: "",
    },
    landmark: {
      type: String,
      default: "",
    },
  },

  zip: {
    type: String,
    default: "",
  },
  profile_image: {
    type: String,
    default: "",
  },

  reference_id: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  uniqueness_id: {
    type: String,
    default: "",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Aadharkyc", aadharkycSchema);
