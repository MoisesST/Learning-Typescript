// inferência
class Message {
  texto;

  constructor(texto: string) {
    this.texto = texto;
  }

  getTexto(): string {
    return this.texto;
  }
}

class Messenger {
  letter;

  constructor(message: Message) {
    this.letter = message.getTexto();
  }

  readTheLetter(): void {
    const app = document.getElementById("app");
    const h1 = document.createElement("h1");
    h1.textContent = this.letter;
    app?.appendChild(h1);
  }
}
const message = new Message("Hello, World!");
const messenger = new Messenger(message);
messenger.readTheLetter();
