// Tipos primitivos
// Sintaxis de declaración
// let variable: tipo;
// string
let mensaje;
mensaje = 'Hola Mundo!';
// mensaje = 12; Error
// number
let resultado;
resultado = 9.5;
// boolean
let mayorEdad;
mayorEdad = true;
// Tipos complejos
// Arrays
// let identificador: tipo-elemento[] ó bien let identificador: Array<tipo-elemento>
let frutas;
let vehiculos;
frutas = ['peras', 'manzanas'];
// Tipo any (romper la inferencia de tipos)
let id = 2876;
id = '06754';
// Tipado de funciones (parámetros y salida)
function suma(a, b) {
    return 'El resultado es ' + a + b;
}
function setMensaje(mensaje) {
    console.log(mensaje);
}
// Tipo genérico en funciones (se define el tipo en la invocación de la función)
function devResultado(a) {
    return a;
}
const b = devResultado('Hola');
const c = devResultado(1234);
