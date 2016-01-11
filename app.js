var app = require('./config/app.config.js');
var db = require('./config/db.config.js');

//chamada dos arquivos de rotas
var Index = require('./routes/index.router.js');
var Usuario = require('./routes/user.router.js');

//Rotas
app.use('/',Index);
app.use('/user', Usuario);





//aqui eu abro e fecho a conexão com o mysql só para testar e ver se realmente ele conectou 
db.connect(function(err){
    if(err){
        console.error('Erro na conexão com o mysql. ['+ err +']');
    }else{
        console.log('Conexão com o mysql aberta');
    }
});

//

