# Aula 04 (18/03) 

# Objetos em Javascript

Em JavaScript, um objeto é uma coleção dinâmica de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. Esse valor pode ser uma simples string, um número, um booleano, ou mesmo outra estrutura complexa como um array ou um outro objeto, permitindo a criação de estruturas de dados aninhadas e complexas.

A forma mais direta de definir um objeto é utilizando chaves ```{}``` para delinear o objeto e seus atributos descritos como ```nome_atributo: valor``` separados por vírgula ```,```

~~~js
let pessoa = {
    nome: "Maria",
    idade: 28
};

console.log(pessoa.nome) // imprime 'Maria'
~~~

~~~js
let pessoa = {
    nome: "Maria",
    idade: 28,
    endereco: {
        rua: "Rua dos Alfaces",
        numero: 123,
        cidade: "São Paulo"
    }
};

console.log(pessoa.endereco.cidade) // imprime 'São Paulo'
~~~

# Funções em Javascript

As funções em JavaScript são blocos de código reutilizáveis que permitem agrupar instruções e executá-las quando necessário. Elas desempenham um papel crucial na criação de código modular, organizado e eficiente. 

Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

# Declaração básica de uma função Javascript

A definição (declaração) da função consiste no uso da palavra chave ```function```, seguida por:

* ```IDENTIFICADOR```: Nome da Função.
* ```ARGUMENTOS``` variáveis que recebem os valores passados na chamada da função. São descritos dentro dos parênteses e separados por vírgulas.
* ```BLOCO_DE_COMANDOS``` sequência de comandos a serem executados. São descritos entre chaves { }.

~~~js
function IDENTIFICADOR(ARGUMENTOS) {
  //BLOCO_DE_COMANDOS
  comando1()
  comando2()
  ...
  comandoN()
} 
~~~

A declaração ```return VALOR```, quando existir, especifica parar a execução do bloco de comandos devolvendo o ```VALOR``` especificado.

~~~js
function fatorial(num) {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# O que são funções que devolvem objetos?

~~~js
let user = newUser('Ana', 20)
~~~

Isso lembra um método construtor?

# Funções anônimas

Funções também podem ser criadas por uma expressão de função sem indicar um identificador. Essa função é conhecida como uma **'função anônima'**. Neste caso, a função pode ser armazenada em uma variável ou ser passada como parâmetro para outra função.

~~~js
let raizQuadrada = function (numero) {
  return numero * numero;
};
let x = raizQuadrada(4); //x recebe o valor 16
~~~

Passando a função para outra função

~~~js
function raizCubica(f, numero) {
  return f(numero) * numero;
};
let x = raizCubica(raizQuadrada, 3); //x recebe o valor 27
~~~

# Arrow functions 

As **arrow functions** foram introduzidas no ES6 como uma maneira mais curta e simples de escrever funções. Elas eliminam a necessidade da palavra-chave ```function``` e têm uma sintaxe mais enxuta:

~~~js
const raizQuadrada = (numero) => numero * numero;
~~~

ou

~~~js
const fatorial = (num) => {
  let fat = 1
  for(let i=1; i<=num; i++) {
    fat = fat * i
  }
  return fat
}
~~~

# Funções Callback

As funções de **callback** em JavaScript são funções passadas como argumentos para outras funções. Elas são executadas após a conclusão de uma operação, permitindo um fluxo de trabalho assíncrono. Isso é crucial em operações que dependem de tempo, como solicitações de rede ou eventos de usuário.

## Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

> https://geek-jokes.sameerkumar.website/api?format=json

## SetInterval e SetTimeout

* SetInterval: chama uma função a cada período de tempo https://www.w3schools.com/jsref/met_win_setinterval.asp
* SetTimeout: chama uma função uma vez após um período de tempo https://www.w3schools.com/jsref/met_win_settimeout.asp


 