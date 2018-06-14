var MongoClient = require('mongodb').MongoClient,
	// commandLineArgs = require('command-line-args'), 
	assert = require('assert');


// var options = commandLineOptions();


MongoClient.connect('mongodb://localhost:27017', function (err, client) {

	assert.equal(err, null);
	console.log('Successfully connected to MongoDB.');

	let db = client.db('schdb');

	var numMatches = 0;

	var cursor = db.collection('schoolGrades').find({});
	cursor.skip(6);
	cursor.limit(2);
	cursor.sort({ 'grade': 1 });

	// cursor.toArray(
	// 	function (doc) {
	// 		numMatches = numMatches + 1;
	// 		console.log(doc);
	// 	},
	// 	function (err) {
	// 		assert.equal(err, null);
	// 		// console.log('Our query was:' + JSON.stringify(query));
	// 		console.log('Matching documents: ' + numMatches);
	// 		return client.close();
	// 	}
	// );

	cursor.forEach(
		function (doc) {
			numMatches = numMatches + 1;
			console.log(doc);
		},
		function (err) {
			assert.equal(err, null);
			// console.log('Our query was:' + JSON.stringify(query));
			console.log('Matching documents: ' + numMatches);
			return client.close();
		}
	);

});