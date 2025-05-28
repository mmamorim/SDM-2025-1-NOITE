
export default function rotasFilmes(server, db) {

    server.get('/filmes', (req, res) => {
        let filmes = db.get("/filmes")
        res.status(200).json(filmes)
    });
    
    server.post('/filmes', (req, res) => {
        let id = db.newID("FILME-")
        let data = { id, ...req.body }
        db.set("/filmes/"+data.id, data)
        res.status(201).json({ msg: "Inserção ok.", data })
    });
    
    server.put('/filmes/:id', (req, res) => {
        let id = req.params.id;
        let filme = db.get("/filmes/"+id);
        if(filme == null) {
            res.status(400).json({ msg: "Filme não existe." })
            return
        }
        let data = { id, ...req.body }
        db.set("/filmes/"+data.id, data)
        res.status(201).json({ msg: "Alteração ok.", data })
    });
    
    server.delete('/filmes/:id', (req, res) => {
        let id = req.params.id;
        let filme = db.get("/filmes/"+id);
        if(filme == null) {
            res.status(400).json({ msg: "Filme não existe." })
            return
        }
        db.set("/filmes/"+id, null)
        res.status(201).json({ msg: "Exclusão ok." })
    });
    

}