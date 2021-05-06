const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product");

router.get("/", (req, res, next) => {
  res.status(200);
  res.write("Handling GET request tp /product");
  res.end();
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log("result", result);
      res.status(200).json({
        message: "Handling POST call to /products",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  Product.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({ message: "Updated product" });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({ message: "Deleted product" });
});

module.exports = router;
