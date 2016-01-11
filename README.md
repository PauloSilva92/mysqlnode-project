Este projeto tem como objetivo ajudar quem quer criar um projeto em nodejs e utilizar o banco de dados Mysql.

##Quick Start

1. Instalação: 

	Rode o seguinte comando no terminal dentro da pasta do seu projeto.

	`$ git clone https://github.com/PauloSilva92/mysqlnode-project.git`

2. Configuração:

	O primeiro passo é rodar no terminal "`npm install`" para que todos os pacotes necessarios sejam instalados.

	Vá até a pasta config e abra o arquivo "`db.config.js`". Nele você vai encontrar o campo onde é criado o objeto de conexão. Modifique os dados dele para as configurações do seu banco de dados.

	No arquivo "`app.config.js`" é possivel ver todas as configurações da aplicação. Modifique-as vontade. Caso não queira modificar deixe como está.
3. Rodando a aplicação:

	Para rodar a aplicação digite "`npm start`". O serviço rodará com o comando "`node app.js`". Caso queira utilizar o `nodemon`, vá até o arquivo "`package.json`" e mude o valor do atributo "`start`" para "`nodemon app.js`".

4. Testes

	Existem alguns testes na pasta "`tests`" que se utilizam do pacote "`FrisbyJS`", você precisa ter instalado globalmente o pacote "`jasmine-node`". Caso não tenha instalado é só rodar no terminal "`npm install jasmine-node -g`".

	São testes simples para testar as rotas da aplicação. utilize o comando "`npm test`" para rodá-los.

