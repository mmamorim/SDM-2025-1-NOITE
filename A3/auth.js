import 'dotenv/config'
import jwt from "jsonwebtoken"
import { SimpleCrypto } from "simple-crypto-js"
import sgbd from './sgbd.js'

const SECRET = process.env.SECRET
let AUTH = false
if(process.env.AUTH == 'true') {
    AUTH = true
    console.log(`🔥 mini crud server using AUTH!`);
}

const auth = {
    username: 'admin',
    password: '12345',
    secret: SECRET,

    getToken(username) {
        let token = jwt.sign({ user: username }, auth.secret, { expiresIn: 120 })
        return token
    },

    authRote(app) {
        app.post('/auth', function (req, res) {
            console.log('conteúdo do body:', req.body);
            let { username, password } = req.body

            if(sgbd.db["users"][username] == undefined) {
                res.json('usuário / senha não existe/inválidos!')
                return
            }
            let cryptpass = sgbd.db["users"][username].password
            const simpleCrypto = new SimpleCrypto(SECRET)
            let pass_decrypted = simpleCrypto.decrypt(cryptpass)
            //console.log("pass_decrypted", pass_decrypted);
            if(password == pass_decrypted) {
                let token = auth.getToken(username)
                res.json({ msg: 'ok', token })
            } else {
                res.json('usuário / senha inválidos!')
            }
        })
    },

    async middlewareAuth(req, res, next) {
        console.log("chamei middleware");
        if(!AUTH) {
            next()
            return
        }
        let headerText = req.headers.authorization
        console.log("headerText",headerText);
        if(headerText == undefined) {
            res.status(400).json({ msg: 'token not found.' })
        } else {
            let parts = headerText.split(" ")
            let token = parts[1]
            console.log("token",token);
            jwt.verify(token, auth.secret, (err, tokenDecoded) => {
                if(err) {
                    res.status(400).json({ msg: 'token not valid. '+err })
                } else {
                    //console.log("tokenDecoded",tokenDecoded);
                    next()    
                }
            })
        }
    }
}

export default auth