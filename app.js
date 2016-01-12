var app = require('./config/app.config.js');

//chamada dos arquivos de rotas
var Index = require('./routes/index.router.js');
var Usuario = require('./routes/user.router.js');

//Rotas
app.use('/',Index);
app.use('/user', Usuario);











