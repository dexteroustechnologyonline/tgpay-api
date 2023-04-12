const express = require("express");
const {
    createBankDetail,getAllBankDetails,GetBankDetailsbyUserId
} = require("../controllers/bankDetailsController");


const router = express.Router();
 router.route("/new").post(createBankDetail);
 router.route("/all").get(getAllBankDetails);
 router.route("/:id").get(GetBankDetailsbyUserId);
 
module.exports = router;
