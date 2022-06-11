const http = require('http');



http.createServer(router).listen(2000);

function router(req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404, No se lo que quieres');
            res.end();
    }



}

console.log('Escuchando en el puesto 2000');