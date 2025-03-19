
console.log("funções");

function fat(n) {
    let value = 1
    for(let i=1; i<=n; i++) {
        value = value * i
    }
    return value
}

let soma = (x,y) => x+y

setInterval(() => {
    console.log("chamei faz algo ID ")
}, 1000)

setInterval(() => {
    console.log("chamei outro ")    
},2500)

server.request('user',() => {
    
})

