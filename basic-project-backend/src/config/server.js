/* imports */
var express = require('express'),
    bodyParser = require('body-parser');
    //routes = require('../app/routes/user.routes');

/* routes */
const path = require('../constant/path');
const userRouter = require('../app/routers/user.router');
const loginRouter = require("../app/routers/login.router");
const signRouter = require("../app/routers/signup.router");
const authMiddleware = require("../app/middleware/auth.middleware");
/* inciar */
var app = express();

/* import db connection */
require("../app/database/db");

/* configurar middlwares */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(path.login.root, loginRouter);
app.use(path.signup.root, signRouter);

app.use(authMiddleware);
app.use(path.user.root, userRouter);
//app.use('/', routes);

/* exportar objeto app */
module.exports = app;


