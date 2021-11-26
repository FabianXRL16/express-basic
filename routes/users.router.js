const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users');
});

router.get('/:type', (req, res) => {
  const { type } = req.params;
  const { limit } = req.query;
  let size = limit || 5;
  let users = [];
  for (let i = 0; i < size; i++) {
    users.push({
      id: `000${i + 1}`,
      type,
    });
  }
  res.json(users);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "User created",
    data: body
  })
})

module.exports = router;
