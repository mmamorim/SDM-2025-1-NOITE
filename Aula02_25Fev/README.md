# Aula 02 (25/02) 

<img align="right" src="https://cdn.worldvectorlogo.com/logos/nodejs.svg" width="140px;"/>

## NodeJS

**Node.js** é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

([download/instalação](https://nodejs.org/pt))


<img align="right" src="https://e7.pngegg.com/pngimages/828/432/png-clipart-npm-node-js-computer-icons-computer-software-installation-others-text-rectangle.png" width="70px;"/>


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

<img align="right" src="https://www.pngfind.com/pngs/m/236-2367416_free-download-at-icons8-json-transparent-background-logo.png" width="50px;"/>

## O que é um arquivo JSON?

Um arquivo **JSON** é um arquivo de texto que armazena dados estruturados em pares de chave e valor e é um formato aberto que é usado para trocar dados entre sistemas. **JSON** é a sigla para **JavaScript Object Notation**. 

#### Sintaxe JSON

Além da terminação ```.json``` em todos os arquivos que utilizam esse formato, os dados armazenados devem seguir uma notação específica, ou seja, precisam ser organizados com os seguintes elementos básicos:

* **chaves** ```{ }``` para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
* **colchetes** ```[ ]``` para indicar um array;
* **dois pontos** ```:``` para separar a chave e seu valor correspondente;
* **vírgula** ```,``` para indicar a separação entre os elementos.

## Modularização (import/export)

Existem duas formas: 
* CJS (Common JavaScript) ou
* ESM (EcmaScript Modules)

Para esta aula vamos apenas mostrar o uso do **ESM (EcmaScript Modules)**

[referência Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) 

### Exportando recursos do módulo

Isso é feito usando a declaração ```export```

A maneira mais fácil de usá-lo é colocá-lo na frente de qualquer item que você queira exportar para fora do módulo, por exemplo:

~~~js
export const name = "john";

export function draw() {
    ...
}
~~~

Uma maneira mais conveniente de exportar todos os itens que você deseja exportar é usar uma única instrução de exportação no final do arquivo do módulo, seguida por uma lista separada por vírgula dos recursos que você deseja exportar envoltos em chaves. Por exemplo:

~~~js
export { name, draw }
~~~

### Importando recursos para o seu script

Depois de exportar alguns recursos do seu módulo, é necessário importá-los para o script para poder usá-los. A maneira mais simples de fazer isso é a seguinte:

~~~js
import { name, draw } from "./arquivo.js";
~~~

### Vamos brincar um pouco...

Utilizaremos alguns trechos de código de ajuda que podem ser encontrados na pasta [trechos](./trechos/)
