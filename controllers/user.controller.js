var Usuario = require('../models/user.model.js');

exports.save = function(nome, email, senha, callback){
    
    //construção do objeto que com os dados que serão inseridos no banco
    var usuario= {
                    'nome': nome,
                    'email':email,          //aqui voce pode mudar para os campos da sua tabela de usuario, sinta-se livre.
                    'senha':senha
                };
    
    //chamada da função do model
    Usuario.save(usuario, function(resp){
        callback(resp);
    });
};


exports.list = function(callback){
    
    Usuario.list(function(resp){
        callback(resp);
    });
};