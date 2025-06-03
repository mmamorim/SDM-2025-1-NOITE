import jwt from "jsonwebtoken"
import { SimpleCrypto } from "simple-crypto-js"
import * as dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.SECRET
const isAUTH = process.env.AUTH

if (isAUTH) {
    console.log(`🔥 server using AUTH!`);
}

function getToken(email) {
    let token = jwt.sign({ email }, SECRET, { expiresIn: 120 })
    return token
}

export default function auth(server, db) {

    server.post('/auth', function (req, res) {
        console.log('conteúdo do body:', req.body);
        if (req.body) {
            let email = req.body.email
            let senha = req.body.senha
            console.log("dados recebidos", { email, senha });
            let users = db.get("/usuarios")
            //console.log("usuarios", users);
            for (let key in users) {
                if (users[key].email == email) {
                    let cryptpass = users[key].senha
                    const simpleCrypto = new SimpleCrypto(SECRET)
                    let pass_decrypted = simpleCrypto.decrypt(cryptpass)
                    console.log("pass_decrypted", pass_decrypted);
                    if (pass_decrypted == senha) {
                        let token = getToken(email)
                        res.status(200).json({ msg: "token generated", token })
                    }
                }
            }
            res.status(400).json({ error: true, msg: "Incorret email or password" })
        } else {
            res.status(400).json({ error: true, msg: "Missing email and password" })
        }


        //        let cryptpass = sgbd.db["users"][username].password
        //        const simpleCrypto = new SimpleCrypto(SECRET)
        //        let pass_decrypted = simpleCrypto.decrypt(cryptpass)
        //        //console.log("pass_decrypted", pass_decrypted);
        //        if (password == pass_decrypted) {
        //            let token = auth.getToken(username)
        //            res.json({ msg: 'ok', token })
        //        } else {
        //            res.json('usuário / senha inválidos!')
        //        }
    })
}