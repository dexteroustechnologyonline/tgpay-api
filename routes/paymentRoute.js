const express = require("express");
const {
    createPayment,getAllPayment
} = require("../controllers/paymentController");


const router = express.Router();
 router.route("/new").post(createPayment);
 router.route("/all").get(getAllPayment);


module.exports = router;
