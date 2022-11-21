let n1 = 10; // inferência
let n2: number = 40; // annotation

let b: boolean = true;

const m: number[] = [1, 2, 3]; // object
// console.log(m.toUpperCase()); // error because is number not string

let a: any = 0;
a = 'lala';
a = true;
a = [];

let id: string | number = '10'; // union types
type MyIdType = string | number; // type alias
const userId: MyIdType = 10;

let t: [number, string, string[]] = [1, 'lala', ['a', 'b']] // tuple

const user: { name: string, age: number } = {
    // fristName: 'Ana'; // error
    name: 'Moisés',
    age: 22,
}

enum Size { // enum
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grand',
}

const camisa = {
    name: 'Camisa do Brasil',
    size: Size.M,
}

let teste: 'autenticado' | null; // literal types
teste = 'autenticado';
teste = null;
// teste = 12 // error

function sum(a: number, b: number) { // function 
    return a + b;
}
// function soma(a, b) { return a + b} // any / inferência / error

function saySomething(msg: string): string {
    return msg;
}

function logger(msg: string): void {
    console.log(msg);
}

function greeting(name: string, greet?: string) {
    if (greet)
        console.log(`Olá ${greet} ${name}`)
    else
        console.log(`Olá ${name}`)
}

interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nuns: MathFunctionParams) {
    return nuns.n1 + nuns.n2;
}
console.log({n1: 1, n2: 2});

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(someNumbers);

function doSomething(info: number | boolean) { // narrowing / checagem de tipos
    if (typeof info === 'number')
        console.log(`O número é ${info}`)
    else
        console.log('Não é um número');
}
doSomething(5);
doSomething(true);

function showArrayItems<T>(arr: T[]) { // generics
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);

class User { // class
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
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

interface IVehicle { // interfaces
    brand: string;
    showBrand(): void; 
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

class Fusca extends Car { // herança
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const fusca = new Fusca('Volkswagen', 4, 1.3);
console.log(fusca);
fusca.showBrand();

function BaseParameters() { // constructor decorator
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.floor(Math.random() * 10);
            createdAt = new Date();
        }
    } 
}

@BaseParameters() // // decorator
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}
const sam = new Person('Sam');
console.log(sam);














