'use strict';

var AWS = require("aws-sdk");

module.exports.save = (event, context, callback) => {

  let docClient = new AWS.DynamoDB.DocumentClient();

  let userTable = process.env.ENV_USERS_TABLE;

  let params = {
    TableName: userTable,
    Item: {
      "email": event.email
    }
  };

  console.log("Adding a new user ... " +event.email);
  docClient.put(params, function(err, data) {
    if (err) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({message: err})
      };
      callback(null, response);
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({message: 'success'})
      };
      callback(null, response);
    }
  });
};
