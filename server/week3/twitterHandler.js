
var { MongoClient } = require('mongodb');
var assert = require('assert');
var Twitter = require('twitter');

require('dotenv').load();

var twitterClient = new Twitter({
	consumer_key : process.env.TWITTER_CONSUMER_KEY,
	consumer_secret : process.env.TWITTER_CONSUMER_SECRET,
	access_token_key : process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret : process.env.TWITTER_ACCESS_TOKEN_SECRET
});

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

	assert.equal(null, err);

	if(err) {
		console.log('Unable to connect with db', JSON.stringify(err, undefined, 2));
		return;
	}

	let db = client.db('social');
	console.log('Connected to Database. PORT: 27017');

	twitterClient.stream('statuses/filter', {track: 'smart'}, (stream) => {
		stream.on('data', (status) => {
			console.log('Status = ', status);
			db.collection('statuses').insertOne(status, (err, res) => {
				console.log('Document Inserted with _id = ' + res.insertedId + '\n');
			});
		});
        
		stream.on('error', (error) => {
			console.log('Error Occured');
			client.close();
			throw error;
		});
	});

});