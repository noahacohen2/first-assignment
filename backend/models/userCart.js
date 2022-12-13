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
  userEmail: {
    type: String,
    require: true,
  },
  cartItems: {
    type: Array,
    require: true,
  },
});

const UserCart = mongoose.model("usercarts", userCartSchema);
module.exports = UserCart;
