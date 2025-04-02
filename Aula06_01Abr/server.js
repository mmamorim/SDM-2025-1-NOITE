import express from "express";
const api = express();

api.get('/', (req, res) => {
 res.send('Oi Gente');
});

api.listen(3001, () => {
 console.log('Server escutando na porta 3001');
});