const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // firstname: { type: String, required: true },
    // lastname: { type: Number, required: true },
    // email: { type: String, required: true },
    // phoneNr: { type: Number, required: true },
    // address: { type: String, required: true },
    // zip: { type: Number, required: true },
    // city: { type: String, required: true }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;