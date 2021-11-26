const songsRouter = require('./songs.router');
const routerProducts = require('./products.router');
const routerCategories = require('./categories.router');
const routerUsers = require('./users.router');
const routerPlayList = require('./playList.router')

function getApi(app) {
  app.use('/songs', songsRouter);
  app.use('/products', routerProducts);
  app.use('/categories', routerCategories);
  app.use('/users', routerUsers);
  app.use('/playlist', routerPlayList)
}

module.exports = getApi;
