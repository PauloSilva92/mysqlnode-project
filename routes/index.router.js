var router = require('express').Router();

router.get('/', function(req, res){
   res.send('Mysql Node'); 
});

module.exports = router; 