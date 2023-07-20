/* imports */
var express = require('express'),
    bodyParser = require('body-parser');
    //routes = require('../app/routes/user.routes');

/* routes */
const path = require('../constant/path');
const userRouter = require('../app/routers/user.router');

/* inciar */
var app = express();

/* import db connection */
require("../app/database/db");

/* configurar middlwares */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(path.userPath.root, userRouter);
//app.use('/', routes);

/* exportar objeto app */
module.exports = app;


