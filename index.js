require("dotenv").config();

const express = require("express");
const app = express();
const errorRouter = require(".routes/error");

app.get("/", (req, res) => {
    res.status(200).json({msg: process.env});
})

app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT || 5000, () => {
    console.log("HTTP Server Started");
})
