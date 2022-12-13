const express = require("express");
const { default: mongoose } = require("mongoose");
const UserCart = require("./models/userCart.js");
const Product = require("./models/product.js");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://noaanddani:daninoadb@cluster0.uammdub.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("mongo connection error", err);
  });

app.post("/userCart", async (req, res) => {
  if (req.body != {}) {
    UserCart.create(req.body.cart)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  res.end();
});

app.get("/products", async (req, res) => {
  Product.find({})
    .then((products) => {
      res.end(JSON.stringify(products));
    })
    .catch((e) => {
      console.log(e);
      res.end();
    });
});

app.listen(3000, () => {
  console.log("listening in port 3000");
});
