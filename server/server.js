//enabling express and cors

import express from "express";
import cors from "cors";

//set port in config.env
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 9090;

app.use(cors());
app.use(express.json());
app.use(require(".routes/record"));

//connect driver
const dbo = require("./db/conn");

app.listen(port, () => {
    //connect db
    dbo.connectToServer(function (err) {
        if (err) console.log(err);
    });
    console.log(`Server is running on port: ${port}`);
});