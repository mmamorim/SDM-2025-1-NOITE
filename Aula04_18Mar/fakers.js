import nomes from "./fakedata/nomes.js"

function fakeName() {
    let num = parseInt(Math.random()*nomes.length)
    return nomes[num]
}

export function fakeUser() {

    return {
        firstName: fakeName(),
        lastName: "",
        username: "",
        password: "",
        rg: "",
        email: ""    
    }
}