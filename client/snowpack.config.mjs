/*
 public -> where are my public files (aka index.html, css, assets)
 client -> where is my JS
*/

/** @type {import("snowpack").SnowpackUserConfig } */
//import proxy from 'http2-proxy'
export default {
  mount: {
    /* ... */
    // directory name: 'build directory'
    // public: '/',
    //client: '/dist',
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    //{ match: 'routes', src: '.*', dest: '/index.html' },
    // {
    //   src: '/api/.*',
    //   dest: (req, res) => {
    //     //req.url = req.url.replace(/^/api, '/')
    //     return proxy.web(req, res, {
    //       hostname: 'localhost',
    //       port: 3001,
    //     })
    //   },
    // },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
