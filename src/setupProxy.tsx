const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app: any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://data.tmd.go.th',
      changeOrigin: true,
    //   pathRewrite: { '^/api': '' },
    })
  );
};