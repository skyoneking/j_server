const Koa = require('koa');

const router = require('./router');

const host = 'localhost';
const httpPort = 6000;

function setupHttp() {
    // http通信
    const app = new Koa();

    app.use(router.routes(), router.allowedMethods());

    app.listen(httpPort, () => {
        console.log(`server setup on http://${host}:${httpPort}`);
    });
}

module.exports = setupHttp;
