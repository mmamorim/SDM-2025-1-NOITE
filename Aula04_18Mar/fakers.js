import nomes from "./fakedata/nomes.js"
import sobrenomes from "./fakedata/sobrenomes.js"

function fakeName() {
    let num = parseInt(Math.random()*nomes.length)
    return nomes[num]
}

function fakeSobrenome() {
    let num = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[num]
}

export function fakeUser() {
    let firstName = fakeName()
    let lastName = fakeSobrenome()
    let username = firstName.charAt(0)+lastName
    username = username.toLowerCase()
    return {
        firstName,
        lastName,
        username,
        password: "",
        rg: "",
        email: ""    
    }
}