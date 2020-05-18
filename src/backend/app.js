const express = require('express');
const app = express();
const port = 3001;
const getMovieTitle = require('./movies');

app.get('/api/movies', (req, res) => res.send(getMovieTitle()))

app.get('/api/vicky', (req, res) => res.send('hello vicky, morning, tell a story!'))

app.get('/api/titles', (req, res) => {
    const titles = [
        {id: 1, movies: "blackMirror", year: 2019},
        {id: 1, movies: "Casa de Papel", year: 2015},
        {id: 1, movies: "Fairytail", year: 2014},
    ];

    res.send(titles);
})

app.listen(port, () => console.log('Yes, server running babe :)'))