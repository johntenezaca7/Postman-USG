const newman = require('newman');
const NAME = 'USG Endpoint';

newman.run({
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: ['cli', 'htmlextra'],
    environment: 'usg.postman_env.json'
  })
  .on('start', 
    function (err, args) { 
      console.log(`Running a collection for ${ NAME }.`);
    }
  )
  .on('done', 
    function (err, summary) {
      if (err || summary.error) {
        console.error(`Collection run encountered an ERROR: ${ err || summary.error }.`);
      }
      else {
        console.log(`Collection run for ${ NAME } completed.`);
      }
    }
  );

