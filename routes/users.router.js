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

module.exports = router;
