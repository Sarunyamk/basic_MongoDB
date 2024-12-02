const express = require("express");
const app = express();
require('dotenv').config();

const mongoDBConnect = require("./database/mongo");
const userModel = require("./models/user.model");

//open connection to mongoDB
mongoDBConnect()

// app.use(express.json());  ถ้าใช้ สามอันล่างไม่ต้องใช้อันนี้

app.post("*", express.json());
app.put("*", express.json());
app.patch("*", express.json());

//creste data

app.post("/", async (req, res) => {
    console.log(req.body), "bodyyy"
    res.status(200).json({ message: "success" })
})

app.get("/all", async (req, res) => {
    const data = await userModel.find({})
    console.log(data, "data")
    res.status(200).json({ users: data })
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});