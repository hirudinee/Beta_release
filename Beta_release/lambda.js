let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log('this is a test');

	callback(null,'Successfully executed');
}