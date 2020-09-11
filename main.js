const Koa = require('koa');

const app = new Koa();

// const router = require('./router');
const Router = require('@koa/router');
const koaBody = require('koa-body')({
    multipart: true,
});

const router = new Router();
router.get('/get', koaBody, async ctx => {
    ctx.body = '我是最终服务器get'
});
router.post('/post', koaBody, async ctx => {
    ctx.body = '我是最终服务器post'
});

app.use(router.routes(), router.allowedMethods());

app.listen(6000);