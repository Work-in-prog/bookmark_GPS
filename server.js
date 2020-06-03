// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const path = require('path')
const passport = require('./config/passport')()

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookmarkgpscrud'
const PORT = process.env.PORT || 8080

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
	() => console.log('MongoDB connection established:', mongoURI)
)

  // Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON
app.use(express.static('public'))
app.use(passport.initialize());
app.use(cors());
app.use(parser.json())

// Routes
const bookmarkController = require('./controllers/bookmarks.js')
const userController = require('./controllers/User')

app.use('/bookmarks', bookmarkController)
app.use('/users', userController)

app.use(express.static('public'))

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/public/index.html`));
})

app.listen(PORT, () => {
	console.log('Let\'s get things done on port', PORT)
})