const express = require("express");
const {
    getAllBankTransaction,
    createBankTransaction,
    getBankTransactionUserById,
    DeleteBankTnx,
    UpdateBankTnx
} = require("../controllers/bankTransactionController");


const router = express.Router();
 router.route("/new").post(createBankTransaction);
 router.route("/all").get(getAllBankTransaction);
 router.route("/user/:userId").get(getBankTransactionUserById)
 router.route("/:id").put(UpdateBankTnx);
 router.route("/:id").delete(DeleteBankTnx);

module.exports = router;