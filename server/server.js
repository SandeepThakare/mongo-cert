import express from 'express';
import { MongoClient } from 'mongodb';
import mongoose from './db/mongoose';
import Movies from './models/movies';
import { urlencoded } from 'body-parser';
let app = express();

import engines from 'consolidate';

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('/../views', __dirname + '/views');
app.use(urlencoded({ extended: true }));

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

	if (err) {
		console.log('Unable to conect with db. Error JSON: ', JSON.stringify(err, undefined, 2));
	}

	let db = client.db('video');

	app.get('/', (req, res, next) => {
		res.render('addMovie', {});
	}); 

	app.use((req, res) => {
		res.sendStatus(400);
	});

	// Listen on port 8000, IP defaults to 127.0.0.1
	app.listen(8000);

	// Put a friendly message on the terminal
	console.log('Server running at http://127.0.0.1:8000/');

});
