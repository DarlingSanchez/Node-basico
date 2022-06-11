// function soyAsincrona() {
//     setTimeout(function() {
//         console.log('Hola, Estoy siendo asincrona');
//     }, 1000);
// }
// console.log('Iniciando proceso');
// soyAsincrona();
// console.log('Terminando proceso');

// function soyAsincrona(miCallback) {
//     setTimeout(function() {
//         console.log('Hola, Estoy siendo asincrona');
//         miCallback();
//     }, 1000);
// }
// console.log('Iniciando proceso');
// soyAsincrona(function() {
//     console.log('Terminando proceso');
// });

function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso');
// hola('Darling', function() {
//     adios('Darling', function() {
//         console.log('Terminando proceso');
//     })
// });

hola('Darling', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso');
    })
});

// hola('Darling', function() {});
// adios('Darling', function() {});