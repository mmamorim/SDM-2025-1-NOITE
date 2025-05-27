
export default function rotasTarefas(server, db) {

    server.get('/tasks', (req, res) => {
        let tasks = db.get("/tasks")
        res.status(200).json(tasks)
    });
    
    server.post('/tasks', (req, res) => {
        let id = db.newID("TASK-")
        let data = { id, ...req.body }
        db.set("/tasks/"+data.id, data)
        res.status(201).json({ msg: "Inserção ok.", data })
    });
    
    server.put('/tasks/:id', (req, res) => {
        let id = req.params.id;
        let task = db.get("/tasks/"+id);
        if(task == null) {
            res.status(400).json({ msg: "Task não existe." })
            return
        }
        let data = { id, ...req.body }
        db.set("/tasks/"+data.id, data)
        res.status(201).json({ msg: "Alteração ok.", data })
    });
    
    server.delete('/tasks/:id', (req, res) => {
        let id = req.params.id;
        let task = db.get("/tasks/"+id);
        if(task == null) {
            res.status(400).json({ msg: "Task não existe." })
            return
        }
        db.set("/tasks/"+id, null)
        res.status(201).json({ msg: "Exclusão ok." })
    });
    

}