// importing package
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

// connectiong database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster1.vxthoqp.mongodb.net/?retryWrites=true&w=majority `
  );
  console.log("connected");
}

//using routes
app.use(require("./routes/router.js"));

// listening
const port=80||8000
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
