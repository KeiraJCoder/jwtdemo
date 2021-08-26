require("dotenv").config();

const express = require("express");

//import error route
const errorRouter = require("./routes/error");
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("*", errorRouter); //use error router here

app.listen(process.env.HTTP_PORT || 5000, () => {
    console.log("HTTP Server Started");
})
