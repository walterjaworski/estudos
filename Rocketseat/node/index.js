const express = require('express');

const server = express();

// Query params = ?teste=1 -> parâmetros que retornam informações sobre o objeto com id 1
// Route params = /users/1 -> parâmetro que retorna informações sobre o objeto com id 1
// Request body = { "name": "Walter Jaworski", "email": "walter.jaworski@gmail.com" } -> conteũdo que vem pela rota informada, para adicionar, editar ou excluir usuários


/**
 *
 * Utilizando Query params, o código abaixo retorna a mensagem Hello Nome.
 * caso a url seja http://localhost:3000/?nome=Walter
 * a mensagem retornada será "Hello Walter"
 *  
 * server.get('/teste', (req, res) => {
 *   const nome = req.query.nome;
 *   return res.json({ message: `Hello ${nome}` });
 * })
 */

/**
 * Utilizando o Routes params, o cõdigo abaixo retorna informações passadas pela url
 * caso a url seja http://localhost:3000/users/3
 * a mensagem retornada será "Buscando o usuário 3"
 * 
 * server.get('/users/:id', (req, res) => {
 * const { id } = req.params;
 * return res.json({ message: `Buscando o usuário ${id}`});
 * })
 */

server.get('/users/:id', (req, res) => {
 const { id } = req.params;
 return res.json({ message: `Buscando o usuário ${id}`});
})

server.listen(3000);