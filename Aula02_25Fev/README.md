# Aula 02 (25/02) - Introdução Javascript

## Variáveis

Declaramos uma variável com a palavra-chave ```let```, seguida do nome (identificador) para esta variável

~~~js
let idade, qtde, media
~~~

## Comentários

Comentários são trechos de texto que podem ser adicionados junto com o código. O interpretador ignora o texto marcado como comentários. 
~~~js
/*
Tudo no meio é um comentário.
*/
~~~

Se o seu comentário não contém quebras de linha, é uma opção colocá-lo atrás de duas barras como esta

~~~js
// Isso é um comentário
~~~

## Desvios Condicionais

Igual ao Java...

~~~js
if(x < 5) {
  console.log("menor")
} else {
  console.log("maior")
}
~~~

## Laços de repetição

Igual ao Java...

~~~js
// imprime 10 vezes a string 'oi'
for(let i=0; i<9; i++) {
    console.log("oi");    
}
~~~

## Strings

~~~js
let nome = "Maria"
let idade = 25
let texto1 = "oi '"+nome+"' você tem "+idade+" anos"
let texto2 = 'oi "'+nome+'" você tem '+idade+' anos'
let texto3 = `oi ${nome} você tem ${idade} anos`

console.log(texto1);
console.log(texto2);
console.log(texto3);

console.log(texto3.toLowerCase());
~~~

## Vetores (Arrays)

~~~js
let vet = [23,"oi",54, false]
vet.push(67)
console.log(vet);
vet.pop()
console.log(vet);
~~~