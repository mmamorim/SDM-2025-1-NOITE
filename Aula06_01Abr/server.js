import express from "express";
const api = express();

api.get('/', (req, res) => {
 res.send('Oi Gente');
});

api.get('/algo', (req, res) => {
    res.send('Oi Gente');
   });
   
api.listen(3000, () => {
 console.log('Server escutando na porta 3001');
});