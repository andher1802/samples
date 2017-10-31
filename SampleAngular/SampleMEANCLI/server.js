// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
// Create a routes file for handling http requests
const api = require('./server/routes/api');
const sendemail = require('./server/routes/router.email');

const app = express();

var mongoose = require('mongoose');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/sendemail', sendemail);

// Catch all other routes and return the index file
// point to the angular2 app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
  
});

//connecto to mongo db
mongoose.connect('localhost:27017/testmean');

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));