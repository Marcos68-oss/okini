let tiempoRestante = 5 * 60; // 5 minutos en segundos

const temporizador = setInterval(() => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    console.log(`${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);

    if (tiempoRestante <= 0) {
        clearInterval(temporizador);
        console.log('TERMINADO');
        return;
    }

    tiempoRestante--;
}, 1000);