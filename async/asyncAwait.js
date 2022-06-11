async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            resolve(nombre);
        }, 1000)
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Darling');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando el proceso');
}
console.log('Iniciando el proceso');
main();
console.log('Segunda instruccion');