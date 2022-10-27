const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://www.betvictor.com',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/bv_in_play/v2/en-gb/1/mini_inplay.json',
    createProxyMiddleware(proxy)
  );
};