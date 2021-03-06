import Koa = require('koa');
import router from './router';

const path = require('path');
const koaNunjucks  = require('koa-nunjucks-2');

const serve = require('koa-static');


const app = new Koa();

const staticPath = path.join(__dirname, 'views');
app.use(koaNunjucks({
  ext: 'html',
  path: staticPath,
  nunjucksConfig: {
    noCache: true
  }
}))

app.use(serve(staticPath))

router(app);

app.listen(3000, ()=> {
  console.log(`Server running on  http://localhost:3000`);
});