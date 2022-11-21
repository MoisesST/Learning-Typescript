"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let n1 = 10; // inferência
let n2 = 40; // annotation
let b = true;
const m = [1, 2, 3]; // object
// console.log(m.toUpperCase()); // error because is number not string
let a = 0;
a = 'lala';
a = true;
a = [];
let id = '10'; // union types
const userId = 10;
let t = [1, 'lala', ['a', 'b']]; // tuple
const user = {
    // fristName: 'Ana'; // error
    name: 'Moisés',
    age: 22,
};
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grand";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa do Brasil',
    size: Size.M,
};
let teste; // literal types
teste = 'autenticado';
teste = null;
// teste = 12 // error
function sum(a, b) {
    return a + b;
}
// function soma(a, b) { return a + b} // any / inferência / error
function saySomething(msg) {
    return msg;
}
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet)
        console.log(`Olá ${greet} ${name}`);
    else
        console.log(`Olá ${name}`);
}
function sumNumbers(nuns) {
    return nuns.n1 + nuns.n2;
}
console.log({ n1: 1, n2: 2 });
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(someNumbers);
function doSomething(info) {
    if (typeof info === 'number')
        console.log(`O número é ${info}`);
    else
        console.log('Não é um número');
}
doSomething(5);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow)
            console.log(`Função: ${this.role}`);
        else
            console.log('Informaçao restrita!');
    }
}
const zeca = new User('Zéca', 'Adm', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
class Fusca extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const fusca = new Fusca('Volkswagen', 4, 1.3);
console.log(fusca);
fusca.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.floor(Math.random() * 10);
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters() // // decorators
], Person);
const sam = new Person('Sam');
console.log(sam);
