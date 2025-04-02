# Aula 06 (01/04) 

# O que é uma interface?

Elemento que permite ligar dois sistemas de natureza diferente que não podem ser ligados diretamente.

# O que é uma API ?

Uma API (Interface de Programação de Aplicações) é uma interface que permite que programas diferentes se comuniquem e compartilhem dados, usando um conjunto de definições e protocolos. 

## Protocolo HTTP:
O HTTP (Hypertext Transfer Protocol) é o protocolo de comunicação mais popular para transferência de dados na internet, sendo utilizado para conectar páginas de hipertexto. 

#### Principais métodos

Existem 5 principais métodos:

* **GET:** Requisita uma informação ao servidor
* **POST:** Cria uma nova informação ao servidor
* **PUT:** Atualiza completamente uma informação no servidor
* **DELETE:** Deleta uma informação no servidor
* **PATCH:** Atualiza parcialmente uma informação no servidor

## API HTTP 

Permite que diferentes aplicações se comuniquem e interajam, utilizando o protocolo HTTP para transferir dados entre um cliente e um servidor. 

## APIs REST 

Utiliza o protocolo HTTP para mensagens de solicitação e definição da estrutura das mensagens de resposta. 

Uma API REST funciona quando um cliente envia uma requisição HTTP para um servidor, que processa a requisição e retorna uma resposta, geralmente em formato JSON, que o cliente pode então processar. 

# Exemplo de API REST

> https://geek-jokes.sameerkumar.website/api?format=json

## Como consumir via frontend com o Fetch

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch


# Express

### O que é?

É um framework criado para facilitar a criação de APIs HTTP, ele foi construído pensando no padrão REST, porém o Express não impõe nenhum padrão de desenvolvimento.

### O que faz?

O Express fornece diversos recursos e abstrações úteis na hora de desenvolver uma API HTTP, facilitando o trabalho de desenvolvimento.

### Criando um server básico exemplo

Criar um projeto node e instalar o express...

~~~bash
npm i express
~~~

### Estrutura básica

Em nosso projeto, criar um arquivo JS chamado ```server.js``` com a seguinte estrutura para criar uma API simples.

~~~js
import express from 'express';
const api = express();

api.get('/', (req, res) => {
 res.send('Oi Gente');
});

api.listen(3001, () => {
 console.log('Server escutando na porta 3001');
});
~~~

~~~bash
node server.js
~~~

