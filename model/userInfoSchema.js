const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    lastname: { type: String },
    phonenumber: { type: Number },
    address: { type: String },
    zip: { type: Number },
    city: { type: String }
});

const UserInfoSchema = mongoose.model("Candy", userInfoSchema);

module.exports = UserInfoSchema;