import { server, clapback, PORT } from "./initServer.js"
import rotasFrutas from "./rotasFrutas.js"

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

//server.get('/frutas', (req, res) => {
//    let frutas = clapback.get("/frutas")
//    res.json(frutas)
//});

rotasFrutas(server,clapback)

server.get('/filmes', (req, res) => {
    let filmes = clapback.get("/filmes")
    res.json(filmes)
});

server.post('/filmes/:id', (req, res) => {
    console.log("recebi uma requisição POST /filmes/:id",req.params.id);    
    console.log("chegou no body",req.body);
    let filme = clapback.get("/filmes/"+req.params.id)
    if(filme !== null) {
        res.json({ error: "Error", msg: "Filme já existe!" });
        return
    }    
    let elem = {
        id: req.params.id,
        nome: req.body.nome,
        ano: req.body.ano,
        duracao: req.body.duracao
    }
    console.log("elem",elem)
    clapback.set("/filmes/"+elem.id, elem)
    res.json({ msg: "ok", elem });
});

server.put('/filmes/:id', (req, res) => {
    console.log("recebi uma requisição PUT /filmes/:id",req.params.id);    
    console.log("chegou no body",req.body);   
    let filme = clapback.get("/filmes/"+req.params.id)
    if(filme == null) {
        res.status(405).json({ error: "Error", msg: "Filme não existe!" });
        return
    }  
    let elem = {
        id: req.params.id,
        nome: req.body.nome,
        ano: req.body.ano,
        duracao: req.body.duracao
    }
    console.log("elem",elem)
    clapback.set("/filmes/"+elem.id, elem)
    res.status(200).json({ msg: "ok", elem });
});

server.delete('/filmes/:id', (req, res) => {
    console.log("recebi uma requisição DELETE /filmes/:id",req.params.id);    
    let filme = clapback.get("/filmes/"+req.params.id)
    if(filme == null) {
        res.status(405).json({ error: "Error", msg: "Filme não existe!" });
        return
    }  
    clapback.set("/filmes/"+req.params.id, null)
    res.status(200).json({ msg: "ok. Remoção com sucesso!" });
});

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});