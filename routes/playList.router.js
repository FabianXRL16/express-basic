const express = require('express');

const router = express.Router();

const playList = require('../data/playList')

router.get('/', (req, res) => {
  res.json(playList)
})

module.exports = router
