function calcularPrecio(precioUnitario, cantidad) {
    return precioUnitario * cantidad
};

function puedeReservar(cantidad) {
    if (cantidad <= 2) {
        return true
    } else {
        return false
    }
}

let cantidad = 2;
let precio = 1500;

if (puedeReservar(cantidad) == true) {
    console.log("Precio total: ", calcularPrecio(precio, cantidad))
    console.log("Reservado.")
} else {
    console.log("El maximo de reservas es de 2 por persona")
};