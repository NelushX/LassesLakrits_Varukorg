const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    lastname: { type: String },
    phonenumber: { type: Number },
    address: { type: String },
    zip: { type: Number },
    city: { type: String },
    resetToken: String,
    expirationToken: Date,
    wishlist: [{
        candyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candy"
        }
    }],
    // Användarinfo som fylls i vid beställning
    order: [{
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        }
    }]
});

// Lägg till produkt till wishlist
userSchema.methods.addToWishList = function (candy) {
    this.wishlist.push({ candyId: candy._id })
    const newWishlist = this.wishlist.filter(function ({ candyId }) {

        return !this.has(`${candyId}`) && this.add(`${candyId}`)
    }, new Set)
    this.wishlist = [...newWishlist]
    return this.save();
}

// Ta bort produkt från wishlist
userSchema.methods.removeFromList = function (candyId) {
    const restOftheProducts = this.wishlist.filter(candy =>
        candy.candyId.toString() !== candyId.toString()
    );
    this.wishlist = restOftheProducts;
    return this.save();
}


const User = mongoose.model("User", userSchema);
module.exports = User;