var db = require('../config/db.config.js');


exports.save = function(usuario, callback){
    db.query('INSERT INTO usuarios set ?', usuario, function(err, resultado){
       if(err){
           callback({error: err});
       } else if(resultado){         
           callback(resultado);
       }else{          
           callback({message:'Algo aconteceu de errado'});
       }
    });
};

