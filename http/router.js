const Router = require('@koa/router');
const koaBody = require('koa-body')({
    multipart: true,
});

const api = new Router();
const file = new Router();

api.use('*', koaBody, async (ctx) => {
    ctx.body = 'api...';
});
file.get('*', async (ctx) => {
    ctx.body = 'file...';
});

const router = new Router();
router.use('/api', api.routes());
router.use('/', file.routes());

module.exports = router;
