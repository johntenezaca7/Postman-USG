var newman = require('newman');
var liveServer = require("live-server");

var params = {
    port: 8581, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./newman", // Set root directory that's being served. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
     // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};

newman.run(
  {
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: ['cli', 'html'],
    color:'on',
    environment: 'usg.postman_env.json'
  },
).on('start', function (err, args) { // on start of run, log to console
  console.log('running a collection...');
}).on('done', function (err, summary) {
  if (err || summary.error) {
      console.error('collection run encountered an error.');
  }
  else {
      console.log('collection run completed.');
      liveServer.start(params);
  }
});

