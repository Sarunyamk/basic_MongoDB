const mongoose = require("mongoose")

const taskModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        des: {
            type: String,
            required: true
        }
    },
    {
        collection: "task", timestamps: true
    }
)

module.exports = mongoose.model("task", taskModel)