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
