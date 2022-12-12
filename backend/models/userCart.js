const mongoose = require("mongoose");

const userCartSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  tz: {
    type: String,
    require: true,
  },
  CartItems: {
    type: Array,
    require: true,
  },
});

const UserCart = mongoose.model("UserCart", userCartSchema);
module.exports = UserCart;
