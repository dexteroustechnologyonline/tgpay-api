const express = require("express");
const {
  createBankDetail,
  getAllBankDetails,
  GetBankDetailsbyUserId,
  DeleteBankDetails,
} = require("../controllers/bankDetailsController");

const router = express.Router();
router.route("/new").post(createBankDetail);
router.route("/all").get(getAllBankDetails);
router.route("/bankdelete/:id").delete(DeleteBankDetails);
router.route("/:id").get(GetBankDetailsbyUserId);

module.exports = router;
