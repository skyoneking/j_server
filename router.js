const Router = require('@koa/router');
const koaBody = require('koa-body')({
    multipart: true,
});

const api = new Router();
const file = new Router();
api.use('/', koaBody, async (ctx) => {
    ctx.body = 'server api...';
});
file.get('/', async (ctx) => {
    ctx.body = 'server file...';
});

const router = new Router();
router.use('/api', api.routes());
router.use('/', file.routes());

module.exports = router;
