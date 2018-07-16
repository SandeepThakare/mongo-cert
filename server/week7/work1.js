var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017,localhost:27018,localhost:27019", { replSet: {
        replicaSet: 'course', ssl: true, sslValidate: true 
    }}, function(err, client) {
    if(err) {
		console.log('Unable to connect with db', JSON.stringify(err, undefined, 2));
		return;
	}

    let db = client.db('course');

    var documentNumber = 0;
    function insertDocument() {

        db.collection("repl").insert({ 'documentNumber' : documentNumber++ }, function(err, doc) {
            if (err) throw err;
            console.log(doc);
        });

        console.log("Dispatched insert");
        setTimeout(insertDocument, 1000);
    }

    insertDocument();
});