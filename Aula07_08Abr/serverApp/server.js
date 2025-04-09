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

server.get('/users', (req, res) => {
    console.log("sgdb.db.users",sgdb.db.users);    
    res.json(sgdb.db.users);
});

server.get('/users/:id', (req, res) => {
    console.log("req.params",req.params);    
    res.json(sgdb.db.users[req.params.id]);
});

server.listen(PORT, () => {
 console.log('Server escutando na porta '+PORT);
});