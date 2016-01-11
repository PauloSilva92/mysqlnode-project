var mysql =  require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'mysqlnode', //mude esse campo para o usuario que seu banco utiliza
    password: 'MysqlNode1!', //mude esse campo para a senha do seu usuario do banco de dados
    database: 'mysqlnode' //mude esse campo para o nome do seu banco de dados
});

module.exports = connection;
