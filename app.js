const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
// var session = require("express-session");

const errorMiddleware = require("./middleware/error");

// const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });

}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));


//Rotes Imports
const admin = require('./routes/adminRoute');
app.use("/api/v1/admin", admin);

const user = require('./routes/userRoute');
app.use("/api/v1/user", user);

const addAmount = require('./routes/addAmountRoute');
app.use("/api/v1/addAmount", addAmount);

const banktransaction = require('./routes/bankTransactionRoute');
app.use("/api/v1/banktransaction", banktransaction);

const bankDetails = require('./routes/bankDetailsRoute');
app.use("/api/v1/bankDetails", bankDetails);

const wallettobank = require('./routes/walletToBank');
app.use("/api/v1/wallettobank", wallettobank);

const aadharkyc = require('./routes/aadharkycRoute');
app.use("/api/v1/aadharkyc", aadharkyc);


app.use(errorMiddleware);
module.exports = app;
