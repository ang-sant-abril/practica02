// Tipos primitivos
// Sintaxis de declaración
// let variable: tipo;
// string
var mensaje;
mensaje = 'Hola Mundo!';
// mensaje = 12; Error
// number
var resultado;
resultado = 9.5;
// boolean
var mayorEdad;
mayorEdad = true;
// Tipos complejos
// Arrays
// let identificador: tipo-elemento[] ó bien let identificador: Array<tipo-elemento>
var frutas;
var vehiculos;
frutas = ['peras', 'manzanas'];
// Tipo any (romper la inferencia de tipos)
var id = 2876;
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
var b = devResultado('Hola');
var c = devResultado(1234);
var referencia = 12;
referencia = '02345';
var razaToby = 'Pastor Alemán';
// Clases 
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Lionel', 'Messi');
var jugadores;
jugadores = [
    jugador1,
    // {nombre: 'Cristiano', apellidos: 'Ronaldo'} error
];
// Constructor breve (Sintaxis para clases)
var Player = /** @class */ (function () {
    function Player(name, surname, goals) {
        this.name = name;
        this.surname = surname;
        this.goals = goals;
    }
    Player.prototype.setGoals = function (goals) {
        this.goals = goals;
    };
    Player.prototype.getGoals = function () {
        return this.goals;
    };
    return Player;
}());
var sendButtonState = {
    hidden: false,
    disabled: true,
    waiting: false
};
var Proveedor = /** @class */ (function () {
    function Proveedor(razonSocial, cif) {
        this.razonSocial = razonSocial;
        this.cif = cif;
    }
    Proveedor.prototype.getCif = function () {
        return this.cif;
    };
    return Proveedor;
}());
