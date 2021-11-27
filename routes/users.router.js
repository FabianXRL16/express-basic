const express = require('express');

const router = express.Router();

const usersServices = require('../services/users.services');

const service = new usersServices();

router.get('/', (req, res) => {
  let usersList = service.find();
  res.status(200).json(usersList);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.status(200).json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  const user = service.created(body);
  res.status(201).json({
    message: 'User created',
    data: user,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.status(200).json(user);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.delete(id);
  res.status(200).json(user)
})

module.exports = router;
