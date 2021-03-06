'use strict';

module.exports.hello = (event, context, callback) => {
  var name = process.env.NAME;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello ' +name+ '. Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
