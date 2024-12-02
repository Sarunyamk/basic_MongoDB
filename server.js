const express = require("express");
const app = express();
require('dotenv').config();

const mongoDBConnect = require("./database/mongo");
// const userModel = require("./models/user.model");
// const taskModel = require("./models/task.model");
const model = require("./models/mongo.model");

//open connection to mongoDB
mongoDBConnect()

// app.use(express.json());  ถ้าใช้ สามอันล่างไม่ต้องใช้อันนี้

app.post("*", express.json());
app.put("*", express.json());
app.patch("*", express.json());

//creste data

app.post("/", async (req, res) => {
    const { name, email } = req.body
    const data = await model.user.create({
        name, email
    })
    console.log(data), "bodyyy"
    res.status(200).send("created")
})

app.get("/all", async (req, res) => {
    const data = await model.user.find({})
    console.log(data, "data")
    res.status(200).json({ users: data })
})

app.delete("/:id", async (req, res) => {
    const { id } = req.params
    await model.user.deleteOne({ _id: id })
    res.status(204).send("delete success")
})
app.patch("/:id", async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const user = await model.user.updateOne({ _id: id }, { name })
    res.status(200).send("update success")
})

app.post("/task", async (req, res) => {
    const { title, des } = req.body
    const data = await model.task.create({
        title, des
    })
    console.log(data), "bodyyy task"
    res.status(200).send("created task success")
})
app.get("/alltask", async (req, res) => {
    const data = await model.task.find({})
    console.log(data, "data")
    res.status(200).json({ tasks: data })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});