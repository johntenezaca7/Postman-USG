const newman = require('newman');
const fs = require('fs');


const NAME = 'USG Endpoint';
const FILENAME = `${NAME} ${new Date().toISOString().substring(0,10)}`.split(' ').join('_');

newman.run({
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: ['cli', 'html'],
    color:'on',
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
        console.error(`Collection run encountered an ERROR: ${ err || summary.error}.`);
      }
      else {
        console.log(`Collection run for ${ NAME } completed.`);
      }
    }
  );

