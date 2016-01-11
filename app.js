var app = require('./config/app.config.js');
var db = require('./config/db.config.js');



//aqui eu abro e fecho a conexão com o mysql só para testar e ver se realmente ele conectou 
db.connect(function(err){
    if(err){
        console.log('Erro na conexão com o mysql');
    }else{
        console.log('Conexão com o mysql aberta');
    }
});

db.end(function(){
    console.log('Conexão com o mysql fechada');
});
