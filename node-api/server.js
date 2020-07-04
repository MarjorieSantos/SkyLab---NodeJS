const express = require('express');

const app = express();


//quando o user acessar a rota vamos mostrar uma mensagem na tela
// / = rota raiz
// primeiro parâmetro = o que vai ser exibido, segundo parâmetro = função
// req => a requisição feita para o servidor
// res => resposta para a requisição/usuario


app.get('/', (re, res) => {
  res.send('Hello, sou a Marjorie, estou testando')
});

app.listen(3001);

// IRÁ ATUALIZAR AUTOMATICAMENTE O SERVER QUANDO ALGUMA ALTERAÇÃO FOR FEITA
// NPM INSTALL -D NODEMON