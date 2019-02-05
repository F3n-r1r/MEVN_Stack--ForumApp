// Require in dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Inform that the app is an express app
const app = express()
// Tell app to use morgan to log request (combined is a predefined log format)
app.use(morgan('combined'))
// Tell app to use bodyParser to allow the app to easily parse any json request that are send in
app.use(bodyParser.urlencoded({extended: false}))
// Tell app to use cors to allow a client to access it
app.use(cors())
