const express = require("express");
const {
  createWallettoBank,
  getAllWallettoBank,
  getWallettoBankUserById,
  UpdateWallettoBank,
} = require("../controllers/wallettoBankController");

const router = express.Router();
router.route("/new").post(createWallettoBank);
router.route("/all").get(getAllWallettoBank);
router.route("/user/:userId").get(getWallettoBankUserById);
router.route("/:id").put(UpdateWallettoBank);

module.exports = router;
