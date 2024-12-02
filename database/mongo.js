const mongoose = require("mongoose")

const MONGODB_URL = "mongodb://localhost:27017/mango"

module.exports = async function mongoDBConnect() {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Connect Success")
    } catch (error) {
        console.log("fail connect to database", error)
    }
}
