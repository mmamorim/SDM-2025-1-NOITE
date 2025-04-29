# Aula 09 (29/04) 

# Criar o projeto Node com Express e dependências

1. Criar uma pasta vazia
2. Abrir pasta no VSCode
3. abrir terminal
4. Criar package.json com o comando ```npm init``` ou ```npm init -y```
5. Incluir linha para usar importação ESM no arquivo ```package.json``` 
~~~js
"type": "module",
~~~
6. Instalar dependências
   1. Express ```npm install express```
   2. body-parser ```npm install body-parser```
   3. cors ```npm install cors```
   4. Clapback ```npm install @mmamorim/clapback```
7. Criar o arquivo do servidor ```server.js``` com o código inicial abaixo

~~~js
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
    res.send('🙋‍♂️ Oi gente...você acessou a raiz /');
});

server.listen(PORT, () => {
    console.log('Server escutando na porta '+PORT);
});
~~~

8. Executar o arquivo ```server.js``` 
~~~bash
node server.js
~~~

# Teste da API

Usar extensão: **Thunder Client**