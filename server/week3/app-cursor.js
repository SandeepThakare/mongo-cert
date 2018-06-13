var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');


MongoClient.connect('mongodb://localhost:27017', function(err, client) {

	assert.equal(err, null);
	console.log('Successfully connected to MongoDB.');

	var db = client.db('crunchbase');

	var query = {'founded_year': 2010};

	var cursor = db.collection('companies').find(query);

	/* TODO: Write your line of code here. */

	cursor.project({ 'name':1, 'number_of_employees':1, '_id':0 });

	cursor.forEach(
		function(doc) {
			console.log(doc.name + ' has ' + doc.number_of_employees + ' employees.');
		},
		function(err) {
			assert.equal(err, null);
			return client.close();
		}
	);

});