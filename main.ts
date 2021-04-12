// Tipos primitivos

// Sintaxis de declaración

// let variable: tipo;

// string

let mensaje: string;

mensaje = 'Hola Mundo!';
// mensaje = 12; Error

// number

let resultado: number;
resultado = 9.5;

// boolean

let mayorEdad: boolean;
mayorEdad = true;

// Tipos complejos

// Arrays
// let identificador: tipo-elemento[] ó bien let identificador: Array<tipo-elemento>

let frutas: string[];
let vehiculos: Array<string>;

frutas = ['peras','manzanas'];

// Tipo any (romper la inferencia de tipos)

let id: any = 2876;

id = '06754';

// Tipado de funciones (parámetros y salida)

function suma(a: number, b: number): string {
    return 'El resultado es ' + a + b;
}

function setMensaje(mensaje: string): void {
    console.log(mensaje);
}

// Tipo genérico en funciones (se define el tipo en la invocación de la función)

function devResultado<T> (a: T): T {
    return a;
}

const b = devResultado<string> ('Hola');
const c = devResultado<number> (1234);

// Tipos de unión

type _id = string | number;

let referencia: _id = 12;
referencia = '02345';

// Tipos de unión complejos

type razasPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razasPerro = 'Pastor Alemán';

// Clases 

class Jugador {
    public nombre: string; // Si no se define el modificador es public por defecto
    public apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }
}

let jugador1 = new Jugador('Lionel','Messi');

let jugadores: Array<Jugador>;

jugadores = [
    jugador1,
    // {nombre: 'Cristiano', apellidos: 'Ronaldo'} error
]

// Constructor breve (Sintaxis para clases)

class Player {

    constructor(public name: string, public surname: string, private goals: number) {

    }

    setGoals(goals: number): void {
        this.goals = goals;
    }

    getGoals(): number {
        return this.goals;
    }
}

// Interfaces (tipado estructural)

interface ButtonState {
    hidden: boolean;
    disabled: boolean;
    waiting: boolean;
    backgroundColor?: string;
}

let sendButtonState: ButtonState = {
    hidden: false,
    disabled: true,
    waiting: false,
    // backgroundColor: 'white'
}

// Interfaces y clases (implementación en clases)

interface DatosMaestros {
    razonSocial: string;
    cif: string;

    getCif(): string;
}

class Proveedor implements DatosMaestros {
    razonSocial: string;
    cif: string;
    formaPago: string;

    constructor(razonSocial: string, cif: string) {
        this.razonSocial = razonSocial;
        this.cif = cif;
    }

    getCif(): string {
        return this.cif;
    }

    //
}