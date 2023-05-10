'use strict';

const HttpsProxyAgent = require('https-proxy-agent');

const proxyConfig = [
  {
    context: '/sina',
    target: 'http://139.59.233.201',
    changeOrigin: true,
    logLevel: "debug"
  }
];

function setupForCorporateProxy(proxyConfig) {
  if (!Array.isArray(proxyConfig)) {
    proxyConfig = [proxyConfig];
  }

  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY // || "http://10.102.208.110:8080";

  console.log(proxyServer)
  let agent = null;

  if (proxyServer) {
    agent = new HttpsProxyAgent(proxyServer);
    console.log(`Using corporate proxy server: ${proxyServer}`);
    proxyConfig.forEach(entry => { entry.agent = agent; });
  }

  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
