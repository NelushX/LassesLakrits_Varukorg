const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: [{
        candyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candy",
            required: true
        },
        quantity: {
            type: Number,
            require: true
        },
    }],
    orderDate: {
        type: Date,
        require: true,
        default: Date.now()
    },
    cardKeeper: { type: String, required: true },
    cardNr: { type: Number, required: true },
    expiaryMonth: { type: Number, required: true },
    expiaryYear: { type: Number, required: true },
    cvc: { type: Number, required: true }
});

// Lägg till beställning till order listan
orderSchema.methods.addToOrderList = function (orderObject) {
    this.orderItems.push({ candyId: orderObject._id, quantity: orderObject.quantity })
    // const orderList = this.orderItems.filter(function ({ candyId }) {

    //     return !this.has(`${orderId}`) && this.add(`${orderId}`)
    // }, new Set)
    this.orderSchema = [...orderList]
    return this.save();
}

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;