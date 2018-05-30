import express from 'express';

let app = express();

import engines from 'consolidate';

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.render('hello', {'name': 'Sandeep'});
});

app.use((req, res) => {
	res.sendStatus(400);
});

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:8000/');
