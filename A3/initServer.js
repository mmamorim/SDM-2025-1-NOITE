import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import db from "@mmamorim/clapback"
import * as dotenv from 'dotenv'
dotenv.config()

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const PORT = process.env.PORT || 3000;
console.log("PORT",PORT);

await db.init({ server, port: PORT, dbFileName: 'db.json' })

export { server, db, PORT }