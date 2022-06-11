function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z; //CREA EL ERROR
            //let a = 3 + 2; // FUNCIONA BIEN
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000);
}

asincrona((err, dato) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        //throw err;
        return false;
    } else {
        console.log('Todo esta bien, mi data es: ' + dato);
    }
});