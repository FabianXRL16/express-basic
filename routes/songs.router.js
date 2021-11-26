const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  const { limit } = req.query;
  let size = limit || 20;
  res.json(getData(size))
})


function getData(size){
  let products = [];
  for (let i = 0; i < size; i++) {
    products.push({
      id: `000${i}`,
      name: `product_${i}`,
      type: "smatphone"
    });
    return products;
  }
}

module.exports = router;
