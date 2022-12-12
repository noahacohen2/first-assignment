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
  firstImg: {
    type: String,
    require: true,
  },
  secondImg: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  shopName: {
    type: String,
    require: true,
  },
});

const product = mongoose.model("product", productSchema);
module.exports = product;
