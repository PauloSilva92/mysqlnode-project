var db = require('../config/db.config.js');


exports.save = function(usuario, callback){
    //aqui eu defino a query que sera enviada, como ela se utiliza do objeto usuario eu deixo o ponto de interrogação
    //e passo o usuario como parametro 
    //isso vai ser interpretado pelo módulo
    var query = 'INSERT INTO usuarios set ?';
    db.conexao(query,usuario, function(resposta){
        callback(resposta);
    });
    
};

exports.list = function(callback){
    //essa query seleciona os dois primeiro usuarios do banco de dados. 
    //esse método é só um exemplo de como listar dados do banco de dados. modifique para lisar os dados que deseja.
    var query = 'SELECT * FROM usuarios LIMIT 2';
    db.conexao(query, function(resposta){
        callback(resposta);
    });
    
};

