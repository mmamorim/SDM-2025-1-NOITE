import express from 'express';
import bodyParser from 'body-parser'
import sgdb from "./sgdb.js"

const PORT = 3001

await sgdb.init()
console.log("sgdb.db",sgdb.db);

const server = express();
server.use( bodyParser.json() );       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
  extended: true
}));


server.get('/', (req, res) => {
    res.send('🙋‍♂️ Oi gente');
});

server.get('/users/5435/idade', (req, res) => {
    res.send('acessou a rota /users/5435/idade');
});

server.get('/users', (req, res) => {
    res.send('acessou a rota /users');
});

server.listen(PORT, () => {
 console.log('Server escutando na porta '+PORT);
});