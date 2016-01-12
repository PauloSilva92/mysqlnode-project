var router = require('express').Router();

var UsuarioController = require('../controllers/user.controller.js');

// sinta-se livre pra modificar o nome de qualquer rota
router.post('/save', function(req, res){
    var nome  = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    
   UsuarioController.save(nome, email, senha, function(resp){
      res.json(resp); 
   });
});


router.get('/listall', function(req, res){
   UsuarioController.list(function(resp){
       res.json(resp);
   }) 
});

module.exports = router; 