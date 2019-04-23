var newman = require('newman');

newman.run(
  {
    collection: 'https://www.getpostman.com/collections/cfb4d71641834fdaf493',
    reporters: 'cli',
    color:'on',
    environment: 'usg.postman_env.json'
  },
  function (err) {
	  if (err) { throw err; }
    console.log('collection run complete!');
  }
);