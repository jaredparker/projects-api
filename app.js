
const path = require( 'path' );
const express = require( 'express' );

const app = express();

app.get('/', function(req, res){ res.JSON({'Hello': 'world!'}); });

module.exports = app;