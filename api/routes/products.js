const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200);
  res.write("Handling GET request tp /product");
  res.end();
});

router.post("/", (req, res, next) => {
  res.status(201);
  res.write("Handling POST request tp /product");
  res.end();
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  if (id === "special") {
    res.status(200).json({ message: "You discovered a special ID", id: id });
  } else {
    res.status(200).json({ message: "You passed an ID" });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({ message: "Updated product" });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({ message: "Deleted product" });
});

module.exports = router;
