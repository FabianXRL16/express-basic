const express = require('express');

const router = express.Router();

const productsServices = require('../services/products.services');

const service = new productsServices();

router.get('/', (req, res) => {
  let products = service.find();
  res.status(200).json(products);
});

router.get('/food', (req, res) => {
  res.send('Esta es un ruta especifica');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.created(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update Product',
    name: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Delete Product',
    id,
  });
});

module.exports = router;
