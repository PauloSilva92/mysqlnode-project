var router = require('express').Router();

var UsuarioController = require('../controllers/user.controller.js');

router.post('/save', function(req, res){
    var nome  = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    
   UsuarioController.save(nome, email, senha, function(resp){
      res.json(resp); 
   });
});

module.exports = router; 