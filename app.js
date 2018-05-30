import express from 'express';

let app = express();

app.get('/', (req, res) => {
	res.send('Hello there !!!');
});

app.use((req, res) => {
	res.sendStatus(400);
});

// Configure our HTTP server to respond with Hello World to all requests.
// var server = createServer((request, response) => {
// 	response.writeHead(200, { 'Content-Type': 'text/plain' });
// 	response.end('Hello World\n');
// });

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:8000/');
