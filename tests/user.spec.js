var frisby = require('frisby');

var usuario = {
    'nome':'Paulo',
    'email': 'email@email',
    'senha':'123'
}

frisby
    .create('Testa a rota de cadastro de usuario')
        .post('http://localhost:3000/user/save', usuario)
            .expectStatus(200)
            .toss();
            
frisby
    .create('Testa a rota de listar todos os usuarios')
        .get('http://localhost:3000/user/listall')
            .expectStatus(200)
            .toss();