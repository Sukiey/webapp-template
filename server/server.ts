import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Welcom, my koa server worked!';
});

app.use(router.routes());

app.listen(3000, ()=> {
  console.log(`Server running on  http://localhost:3000`);
});