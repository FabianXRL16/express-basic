const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  const { limit } = req.query;
  let size = limit || 10
  let products = [];
  for (let i = 0; i < size; i++) {
    products.push({
      id: `000${i}`,
      name: `product_${i}`,
      type: "smatphone"
    });
  }
  res.json(products)
})

router.get("/food", (req, res) => {
  res.send("Esta es un ruta especifica")
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: `product${id}`
  })
})

module.exports = router;
