const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

app.get('/whatever', (req, res) => {
    res.send('Hi');
})

//Inserting a path and parameter to get a request from the user and output to the screen
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

//Creating another url to read json data therefore creating an api
app.get('/api/movies', (req, res) =>{
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];

        res.status(200).json({
            myMovies:movies,
            'message':'Data Sent'
        })
})

//Creating another link to read a html file inside another url
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//Getting the input of the form on index.html and displaying the information on another url /name
app.get('/name', (req, res) => {
    res.send(" Hello" + req.query.firstname + " " + req.query.lastname);
})

app.post('/name', (req, res) => {
    res.send('Goodbye ' + req.body.firstname + ' ' + req.body.lastname);
})

//Setting up our app to listen for http responses
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})