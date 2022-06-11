const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    });
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo, ' + err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, callback);
}


//escribir(__dirname + '/archivo1.txt', 'Soy un nuevo archivo', console.log);
//leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);