const express = require("express");
const { default: mongoose } = require("mongoose");
const UserCart = require('./models/userCart.js')
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/assignment', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open")
    }
    ).catch(err => {
        console.log("mongo connection error", err)
    })


app.post('/userCart', async (req, res) => {
    // console.log(req.body.cart)

    if (req.body != {}) {
        UserCart.create(req.body.cart)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    res.end();
});

app.listen(3000, () => {
    console.log("listening in port 3000")
})
