var newman = require('newman');

newman.run(
  {
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: ['cli'],
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
  }
});

