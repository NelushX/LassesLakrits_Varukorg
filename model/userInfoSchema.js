const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    lastname: { type: String },
    phonenumber: { type: Number },
    address: { type: String },
    zip: { type: Number },
    city: { type: String }
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;