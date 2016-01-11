var express = require('express');
var app = express();

var port = 3000 || process.env.PORT;

app.listen(port, function(){    
    console.log('Rodando nas porta: '+port);
});


module.exports = app;
