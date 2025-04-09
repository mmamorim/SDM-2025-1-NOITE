import { JSONFilePreset } from 'lowdb/node'

const db = await JSONFilePreset('db.json', {})

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