import { areaCirculo, PI } from "./circulos.js"
import readlineSync from "readline-sync"

console.log("oi gente")

let raio = readlineSync.question('Digite o valor do raio? ');
raio = parseInt(raio)
console.log("vc digitou o raio: "+raio);

let area = areaCirculo(raio)

console.log("A área de raio 5 é "+area);
console.log("o valor do PI é "+PI);
