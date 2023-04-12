const express = require("express");
const {
    createPayment,
    getAllPayment,
    DeleteAddAmount,
    UpdateAmount
} = require("../controllers/addAmountController");


const router = express.Router();
 router.route("/new").post(createPayment);
 router.route("/all").get(getAllPayment);
 router.route("/:id").put(UpdateAmount);
 router.route("/:id").delete(DeleteAddAmount);


module.exports = router;
