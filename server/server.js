import express from 'express';
import { MongoClient } from 'mongodb';
import mongoose from './db/mongoose';
import Movies from './models/movies';
import bodyParser, { urlencoded } from 'body-parser';
let app = express();

import engines from 'consolidate';

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('/../views', __dirname + '/views');
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

// let db = client.db('video');

app.get('/', (req, res) => {
	res.render('addMovie', {});
});

app.post('/addedMovie', (req, res) => {
	console.log(req.body);

	let movies = new Movies({
		title: req.body.title,
		year: req.body.year,
		imdb: req.body.imdb
	});

	movies.save().then((result) => {
		console.log(result);
		res.send(result);
	})
		.catch((err) => {
			console.log('Unable to add resords. Error JSON: ', JSON.stringify(err, undefined, 2));
			res.sendStatus(400);
		});

});

app.use((req, res) => {
	res.sendStatus(400);
});

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:8000/');
