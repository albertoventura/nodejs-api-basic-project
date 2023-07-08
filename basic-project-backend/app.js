/* importar as configurações do servidor */
var app = require('./src/config/server');
const { PORT } = require('./src/constant/general');

app.listen(PORT, ()=>{
    console.log(`server running at: localhost:${PORT}`);
});

