const express = require('express');

const router = express.Router();

const productsServices = require('../services/products.services');

const service = new productsServices();

router.get('/', async (req, res, next) => {
  try {
    let products = await service.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/food', async (req, res) => {
  res.send('Esta es un ruta especifica');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.created(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateProduct = await service.update(id, body);
    res.json(updateProduct);
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await service.delete(id);
    res.json(deleteProduct);
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

module.exports = router;
