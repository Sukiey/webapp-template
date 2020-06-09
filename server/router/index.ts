// const Router = require("koa-router");
// const router = new Router();
import * as Router from 'koa-router';
import HomeCtrl from '../controller/home';
import UserCtrl from '../controller/user';

const router = new Router();

export default (app) => {
  router.get('/', HomeCtrl.index);
  router.get('/welcome', HomeCtrl.index);
  router.get('/api/currentUser', UserCtrl.current);
  // router.all('*', HomeCtrl.index);
  app.use(router.routes()).use(router.allowedMethods());
};
