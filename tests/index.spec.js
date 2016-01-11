var frisby = require('frisby');

//os testes são feitos para serem realizados no ambiente de desenvolvimento por isso todas as URI's utilizam o localhost

frisby
    .create('testa se a rota de login está funcionando')
        .get('http://localhost:3000/')
        .expectStatus(200)
        .toss();