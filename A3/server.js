import { server, db, PORT } from "./initServer.js"
import auth from "./auth.js"
import rotasFilmes from "./rotasFilmes.js";
import rotasFrutas from "./rotasFrutas.js"
import rotasTarefas from "./rotasTarefas.js"
import rotasUsuarios from "./rotasUsuarios.js";

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

auth(server,db)
rotasUsuarios(server,db)
rotasFrutas(server,db)
rotasTarefas(server,db)
rotasFilmes(server,db)

//async function middlewareTeste(req, res, next) {
//    console.log('Eu sou um middleware!!!!!')
//    if(parseInt(Math.random()*2) == 0) {
//        next()
//    } else {
//        res.send('PROBLEMA!')
//    }
//}
//
//server.get('/teste', middlewareTeste, (req, res) => {
//    res.send('🔥🔥🔥 ROTA /teste acessada!')
//})

server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);
});