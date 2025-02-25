# Aula 02 (25/02) 

<img align="right" src="https://cdn.worldvectorlogo.com/logos/nodejs.svg" width="140px;"/>

## NodeJS

**Node.js** é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

([download/instalação](https://nodejs.org/pt))

## npm

O **NPM** é um gerenciador de pacotes utilizado para administrar as bibliotecas e frameworks utilizados em uma aplicação NodeJS. 

([link p/ npm](https://www.npmjs.com/))

## Package.json

Geralmente um projeto NodeJS contém um arquivo ```package.json``` localizado no diretório raiz. Ele descreve os metadados de projetos ou pacotes npm, como versões de pacotes e colaboradores.

O arquivo ```package.json``` simplifica a identificação, gerenciamento e instalação de um pacote. 

Um exemplo do que um arquivo ```package.json```

~~~json
{
  "name": "app01",
  "version": "1.0.0",
  "description": "um app",
  "main": "main.js",
  "scripts": {
    "server": "node ./server.js",
    "test": "node ./teste.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/alguem/app01.git"
  },
  "keywords": [
    "npm",
    "example",
    "basic"
  ],
  "author": "Alguém da Silva",
  "license": "MIT",
}
~~~

## O que é um arquivo JSON?

Um arquivo **JSON** é um arquivo de texto que armazena dados estruturados em pares de chave e valor e é um formato aberto que é usado para trocar dados entre sistemas. **JSON** é a sigla para **JavaScript Object Notation**. 

#### Sintaxe JSON

Além da terminação ```.json``` em todos os arquivos que utilizam esse formato, os dados armazenados devem seguir uma notação específica, ou seja, precisam ser organizados com os seguintes elementos básicos:

* **chaves** ```{ }``` para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
* **colchetes** ```[ ]``` para indicar um array;
* **dois pontos** ```:``` para separar a chave e seu valor correspondente;
* **vírgula** ```,``` para indicar a separação entre os elementos.


