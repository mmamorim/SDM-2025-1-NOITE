import readlineSync from "readline-sync"

console.log("Vamos jogar palitinhos?")

let nomeJog = readlineSync.question('Qual seu nome? '); 
let qtdePalitosJog = 3
let qtdeEscolhaJog = 0
let qtdeChuteJog = 0

let nomeComp = "Computador"
let qtdePalitosComp = 3
let qtdeEscolhaComp = 0
let qtdeChuteComp = 0

function calculaPalpiteDoComputador() {
    let qtdeSorteada = (parseInt(Math.random()*10) % (qtdePalitosJog+1))
    let palpite = qtdeEscolhaComp + qtdeSorteada
    return palpite
}

while(qtdePalitosJog > 0 && qtdePalitosComp > 0) {

    qtdeEscolhaJog = readlineSync.question("Quantos palitos vc quer separar?")
    qtdeEscolhaJog = parseInt(qtdeEscolhaJog)

    qtdeEscolhaComp = (parseInt(Math.random()*10) % qtdePalitosComp)+1
 
    qtdeChuteJog = readlineSync.question("Qual seu palpite?")
    qtdeChuteJog = parseInt(qtdeChuteJog)

    qtdeChuteComp = calculaPalpiteDoComputador()

    let soma = qtdeEscolhaJog + qtdeEscolhaComp

    let status = nomeJog+" chutou "+qtdeChuteJog+"\n" 
    status = status + nomeComp+" chutou "+qtdeChuteComp+"\n"
    status = status + nomeJog+" separou "+qtdeEscolhaJog+"\n"
    status = status + nomeComp+" separou "+qtdeEscolhaComp+"\n"
    console.log(status)

    if(qtdeChuteJog == soma) {
        console.log("Ganhou o "+nomeJog)
        qtdePalitosJog--
    } else {
        if(qtdeChuteComp == soma) {
            console.log("Ganhou o "+nomeComp)
            qtdePalitosComp--    
        } else {
            console.log("NINGUÉM Ganhou!!!")
        }
    }

    let texto = nomeJog+" com "+qtdePalitosJog+" palitos\n" 
    texto = texto + nomeComp+" com "+qtdePalitosComp+" palitos\n"
    console.log(texto)
}