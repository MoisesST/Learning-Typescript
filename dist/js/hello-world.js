"use strict";
class Message {
    texto;
    constructor(texto) {
        this.texto = texto;
    }
    getTexto() {
        return this.texto;
    }
}
class Messenger {
    letter;
    constructor(message) {
        this.letter = message.getTexto();
    }
    readTheLetter() {
        // 1. Seleciona o elemento div usando a propriedade id
        const app = document.getElementById("app");
        // 2. Cria um novo elemento <p></p> programáticamente
        const h1 = document.createElement("h1");
        // 3. Adiciona conteúdo de texto
        h1.textContent = this.letter;
        // 4. Acrescenta o elemento p no elemento div
        app?.appendChild(h1);
        console.log(this.letter);
    }
}
const message = new Message("Hello, World!");
const messenger = new Messenger(message);
messenger.readTheLetter();
