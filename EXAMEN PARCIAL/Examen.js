// Ejercicio 1: Variables y tipos de datos
console.log("Ejercicio 1: Variables y tipos de datos");

const nombre = "Juan";
const edad = 20;
const estudiante = true;

console.log(nombre);
console.log(edad);
console.log(estudiante);

//Ejercicio 2: Uso de let y modificación de variables
console.log("Ejercicio 2: Uso de let y modificación de variables");

let cantidadTazas = 2;
console.log(cantidadTazas);
cantidadTazas = 5;
console.log(cantidadTazas);

// Ejercicio 3: Operaciones con variables
console.log("Ejercicio 3: Operaciones con variables");

let precio = 5000;
let cantidad = 3;
let importeTotal = precio * cantidad;

console.log("El importe total es: ", importeTotal);

// Ejercicio 4: Valores booleanos y condicionales if / else
console.log("Ejercicio 4: Valores booleanos y condicionales if / else.");
// Una cafetería ofrece reservas para determinados métodos de preparación de café. Crea una variable llamda requiereReserva con el valor True. Utiliza if/else para mostrar los siguientes mensajes: Si requiereReserva es true, mostrar "Este método requiere reserva". En caso contrario, mostrar "Este método no requiere reserva".

let requiereReserva = true;

if (requiereReserva) {
    console.log("Este método requiere reserva");
} else {
    console.log("Este método no requiere reserva");
}

// Ejercicio 5: Condiciones y control de cupos
console.log("Ejercicio 5: Condiciones y control de cupos");
// Una cata de cagé tiene un máximo de 8 participantes. Crea las siguientes variables: inscritos: 6, máximo: 8. Utiliza if/else para verificar la disponibilidad de lugares. Si la cantidada de inscritos es menor que el máximo, mostrar "Hay lugares disponibles". Si la cantidad de inscritos es igual o mayor que el máximo mostrar: "Cata llena". La condición debe funcionar también si se modifica la cantidad de inscritos.

let inscritos = 6;
let maximo = 8;

if (inscritos < maximo) {
    console.log("Hay lugares disponibles");
} else {
    console.log("Cata llena");
}

//Ejercicio 6: Arrays y métodos de café
console.log("Ejercicio 6: Arrays y métodos de café");
// Crea un array llamado metodosCafe que contenda los siguientes elementos: "V60", "Kyoto Drip", "Siphon", "Prensa Francesa".

let metodosCafe = ["V60", "Kyoto Drip", "Siphon", "Prensa Francesa"];
console.log(metodosCafe);

//