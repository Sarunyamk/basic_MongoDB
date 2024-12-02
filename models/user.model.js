const mongoose = require("mongoose")

const userModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    }, {
    collection: "user", timestamps: true
}
    //ให้ schema ตัวนี้มีชื่อว่าอะไร
)

module.exports = mongoose.model("user", userModel)