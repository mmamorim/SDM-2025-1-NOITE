import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import db from "@mmamorim/clapback"

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const PORT = 3000

await db.init({ dbFileName: 'db.json' })
server.use("/clapback", db.serve(PORT))

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Oi gentessssss...você acessou a raiz /');
});

server.get('/frutas', (req, res) => {
    let dados = db.get("/frutas")
    console.log("dados",dados);    
    res.json(dados);
});

server.get('/frutas/:id', (req, res) => {
    console.log("passei aqui",req.params.id);    
    let dados = db.get("/frutas/"+req.params.id)
    console.log("dados",dados);    
    res.json(dados);
});

server.post('/frutas/:id', (req, res) => {
    console.log("recebi uma requisição POST /frutas/:id",req.params.id);    
    console.log("chegou no body",req.body);    
    res.json({});
});

server.listen(PORT, () => {
    console.log('Server escutando na porta '+PORT);
});