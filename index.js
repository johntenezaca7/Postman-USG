var newman = require('newman');

newman.run(
  {
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: 'htmlextra',
    reporter: {
      htmlextra: {
          template: './template.hbs' // optional, the default template will be used if one is not specified
      }
    },
    environment: 'usg.postman_env.json'
  },
).on('start', function (err, args) { // on start of run, log to console
  console.log('Running a collection...');
}).on('done', function (err, summary) {
  if (err || summary.error) {
    console.error('collection run encountered an error.');
  }
  else {
    console.log('collection run completed.');
  }
});

