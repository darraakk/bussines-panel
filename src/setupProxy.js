const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
  // app.use(createProxyMiddleware('/api', {target: 'http://31.7.74.219:8080', secure: false,}));
  app.use(createProxyMiddleware('/api', {target: 'http://185.124.172.34:4075', secure: false,}));
};