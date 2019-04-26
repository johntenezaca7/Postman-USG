const newman = require('newman');
const NAME = 'USG Endpoint';

newman.run({
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: ['cli', 'htmlextra'],
    environment: 'usg.postman_env.json',
    bail: true,
    timeoutRequest: 10000
  })
  .on('start', 
    function (err, args) { 
      console.log(`Running a collection for ${ NAME }.`);
    }
  )
  .on('done', 
    function (err, summary) {
      const executions = summary.run.executions[0];
      const failures = summary.run.failures[0];
    
      const collatedErrors = [err, summary.error, executions.requestError, failures].filter(error => error);

    if ( collatedErrors.length ) {
      collatedErrors.forEach(err => {
        console.error(`Collection run encountered ERRORs: ${ JSON.stringify(err) }.`);
      })
    } else {
        console.log(`Collection run for ${ NAME } completed.`);
      }
    }
  );

