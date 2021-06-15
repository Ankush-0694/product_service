const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  productName: String,
  productDescription: String,
  productPrice: Number,
  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
