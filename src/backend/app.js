const express = require('express')
const app = express()
const port = 3001
const movies = require('./moviesback')

app.get('./moviesback', (req, res) => req.send(moviesback))

app.listen(port, () => console.log({movies}))