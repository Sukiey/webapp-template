import Router = require('koa-router');
import HomeCtrl from '../controller/home';
import UserCtrl from '../controller/user';

const router = new Router();

export default (app) => {
  router.get('/api/currentUser', UserCtrl.current);
  router.all('(.*)', HomeCtrl.index); // 设置通配符路由
  app.use(router.routes());
};
