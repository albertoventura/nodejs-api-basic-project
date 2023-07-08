/* imports */
var express = require('express'),
    bodyParser = require('body-parser');

/* inciar */
var app = express();

/* configurar middlwares */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* exportar objeto app */
module.exports = app;


