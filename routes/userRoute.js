const express = require("express");
const {
  RegisterUser,
  loginUser,
  mobileExist,
  emailExist,
  getAllUser,
  EditClientbyClientId,
  clentbyphonenumber
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/all").get(getAllUser);
router.route("/register").post(RegisterUser);
router.route("/loginUser").post(loginUser);
router.route("/mobile/:mobile").get(mobileExist);
router.route("/email/:email").get(emailExist);
router.route("/usermobile/:mobilenumber").get(clentbyphonenumber);
router.route("/userupdate/:id").put(EditClientbyClientId);

module.exports = router;
