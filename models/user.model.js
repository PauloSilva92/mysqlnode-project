var db = require('../config/db.config.js');


exports.save = function(usuario, callback){
    db.query('INSERT INTO usuarios set ?', usuario, function(err, rows, fields){
       if(err){
           callback({error: err});
       } else if(rows){         
           callback({message:'Cadastrado com sucesso'});
       }else{          
           callback({message:'Algo aconteceu de errado'});
       }
    });
};

