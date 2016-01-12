var mysql =  require('mysql');

var pool = mysql.createPool({
    connectionLimit:100, 
    host : 'localhost',
    user : 'mysqlnode', //mude esse campo para o usuario que seu banco utiliza
    password: 'MysqlNode1!', //mude esse campo para a senha do seu usuario do banco de dados
    database: 'mysqlnode', //mude esse campo para o nome do seu banco de dados
    debug: false
});

// essa função é responsavel por criar a pool de conexões e executar sua query, não é necessario modifica-la
function conexao(query,object, callback) {
    pool.getConnection(function(err,connection){
        if(err){
            connection.release();
            callback('Erro na conexão com o mysql: ' + err);
        };
        console.log('id de conexão: '+ connection.threadId);
        //testa o segundo parametro, se for uma função executa a query abaixo
        if(typeof(object)=='function'){
            connection.query(query, function(err, rows){
                connection.release();
                if(!err){
                    object(rows);
                };
            });
            connection.on('error', function(err){
                callback({error: 'Erro na conexão'}); 
            });
        }
        //caso o segundo parametro foi um objeto a query executada se utilizará desse objeto
        else if(typeof(object)=='object'){
            connection.query(query,object, function(err, rows){
                connection.release();
                if(!err){
                    callback(rows);
                };
            });
            connection.on('error', function(err){
                callback({error: 'Erro na conexão'}); 
            });
        }
    });
};

//aqui eu crio um objeto que possui o método conexao para ser exportado
var db = {
    conexao: conexao
};

module.exports = db;
