function seRompe() {
    return 3 + z;
}

function otraFuncion() {
    seRompe()
}

function seRompeAsincrona(callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en la funcion asincrona');
            callback(error);
        }
    }, 100)
}

try {
    //otraFuncion();
    seRompeAsincrona((err) => {
        console.log(err.message);
    })
} catch (err) {
    console.error('Ha ocurrido un error');
    console.error(err.message);
    console.log('Lo hemos capturado');
}