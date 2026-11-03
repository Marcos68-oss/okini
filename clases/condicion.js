const CupoCata = 10;
const inscripto = 5;
const TazaReservadoHoy = 47;
const MaximoTazaDia = 50;

console.log("Ejemplo 1:")
if (CupoCata != inscripto) {
    console.log("Reservado")
} else {
    console.log("Cata llena")
}; 

console.log("Ejemplo 2:");

if (TazaReservadoHoy >= MaximoTazaDia ) {
    console.log("Reserva cerrada")
} else {
    console.log("Hay disponible")
};

console.log("Ejemplo 3:");

const cantidadDeTaza = 0;
if ( cantidadDeTaza in [0,1,2,3,4,5,6,7,8,9]) {
    if (cantidadDeTaza > 0 ) {
        if (cantidadDeTaza > 2 ) {
            console.log("Puede reservar maximo 2 tazas")
    }else {
        console.log("Reserva confirmada")
    };   
} else {
    console.log("Debe reservar minimo 1 taza")
}
    
}else {
    
}


