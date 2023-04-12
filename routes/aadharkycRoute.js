const express = require("express");
const {
    createAadharKyc,GetAadharKycbyUserId
} = require("../controllers/aadharKycCountroller");


const router = express.Router();
 router.route("/new").post(createAadharKyc);
 router.route("/user/:id").get(GetAadharKycbyUserId);


module.exports = router;
