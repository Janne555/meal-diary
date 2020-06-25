const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'https://backend:4000',
      secure: false
    })
  );

  app.use(
    '/callback',
    createProxyMiddleware({
      target: 'https://backend:4000',
      secure: false
    })
  );
};