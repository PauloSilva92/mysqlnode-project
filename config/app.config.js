var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, function(){    
    console.log('Rodando na porta: '+port);
});

app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
})

module.exports = app;
