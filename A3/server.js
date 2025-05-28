import { server, clapback, PORT } from "./initServer.js"
import rotasFilmes from "./rotasFilmes.js";
import rotasFrutas from "./rotasFrutas.js"
import rotasTarefas from "./rotasTarefas.js"

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

rotasFrutas(server,clapback)
rotasTarefas(server,clapback)
rotasFilmes(server,clapback)

async function middlewareTeste(req, res, next) {
    console.log('Eu sou um middleware!!!!!')
    if(parseInt(Math.random()*2) == 0) {
        next()
    } else {
        res.send('PROBLEMA!')
    }
}

server.get('/teste', middlewareTeste, (req, res) => {
    res.send('🔥🔥🔥 ROTA /teste acessada!')
})

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});