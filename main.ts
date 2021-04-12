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

