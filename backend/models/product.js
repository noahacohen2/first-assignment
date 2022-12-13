const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    min: 0,
  },
  shopName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  firstImg: {
    type: String,
    require: true,
  },
  secondImg: {
    type: String,
    require: true,
  },
  serialNumber: {
    type: Number,
    require: true,
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
