/* importar as configurações do servidor */
var app = require('./src/config/server');
const { PORT } = require('./src/constant/general');

//var userRoutes = require('./src/app/routes/user.routes')(app);



app.listen(PORT, ()=>{
    console.log(`server running at: localhost:${PORT}`);
});

