import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));


// Use JSON file for storage
const file = join(__dirname, './db_jogos.json')

const adapter = new JSONFile(file)
const db = new Low(adapter)

const sgdb = {
    db: db.data,
    async init() {
        // Read data from JSON file, this will set db.data content
        await db.read()
        sgdb.db = db.data
        //console.log(db.data)
    },
    async write() {
        await db.write()
    }
}

export default sgdb