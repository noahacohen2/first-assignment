const mongoose = require('mongoose');
// const productSchema = new mongoose.Schema({
//     user: {
//         type: String,
//         require: true
//     },
//     name: {
//         type: String,
//         require: true
//     },
//     price: {
//         type: Number,
//         require: true,
//         min: 0
//     },
//     firstImg: {
//         type: String,
//         require: true
//     },
//     secondImg: {
//         type: String,
//         require: true
//     },
//     description: {
//         type: String,
//         require: true
//     },
//     shopName: {
//         type: String,
//         require: true
//     }
// })

const userCartSchema = new mongoose.Schema({
    UserName: {
        type: String,
        require: true
    },
    userId: {
        type: Number,
        require: true,
        min: 0
    },
    CartItems: {
        type: Array,
        require: true
    }
})

const UserCart = mongoose.model('UserCart', userCartSchema);
module.exports = UserCart;