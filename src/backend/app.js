const express = require('express');
const app = express();
const port = 3001;
const getMovieTitle = require('./movies');

app.get('/api/movies', (req, res) => res.send(getMovieTitle()))

app.get('/api/vicky', (req, res) => res.send('hello vicky!'))

app.listen(port, () => console.log('Yes, server running :)'))