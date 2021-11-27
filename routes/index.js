const express = require('express');

const songsRouter = require('./songs.router');
const routerProducts = require('./products.router');
const routerCategories = require('./categories.router');
const routerUsers = require('./users.router');
const routerPlayList = require('./playList.router');

function getApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/songs', songsRouter);
  router.use('/products', routerProducts);
  router.use('/categories', routerCategories);
  router.use('/users', routerUsers);
  router.use('/playlist', routerPlayList);
}

module.exports = getApi;
