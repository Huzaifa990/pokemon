const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define your proxy configuration
const proxyConfig = {
  target: 'https://revoldesigns.com/clients/bin-hamoodah/api/oauth/token',
  changeOrigin: true,
  // Additional configuration options as needed
};

// Create a proxy for the specified route
app.use('/proxy', createProxyMiddleware(proxyConfig));

// Start the proxy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
