function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackhablar) {
    setTimeout(() => {
        console.log('Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        callbackhablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }

}

console.log('Iniciando proceso');
hola('Darling', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    })
})

// hola('Darling', function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             adios(nombre, function() {
//                 console.log('Terminando proceso');
//             });
//         });
//     });
// });