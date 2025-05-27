import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import clapback from "@mmamorim/clapback"

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const PORT = process.env.PORT || 3000;

await clapback.init({ server, port: PORT, dbFileName: 'db.json' })

export { server, clapback, PORT }