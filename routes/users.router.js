const express = require('express');

const router = express.Router();

const usersServices = require('../services/users.services');

const service = new usersServices();

router.get('/', async (req, res) => {
  let usersList = await service.find();
  res.status(200).json(usersList);
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const user = await service.created(body);
  res.status(201).json({
    message: 'User created',
    data: user,
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.delete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
});

module.exports = router;
