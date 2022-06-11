const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/archivo.txt');

readableStream.setEncoding('UTF8');

//PARA ARCHIVOS PEQUEñOS
readableStream.on('data', (chunk) => {
    console.log(chunk);
});

// PARA ARCHIVOS MUY PESADOS
// readableStream.on('data', (chunk) => {
//     data += chunk;
// });

// readableStream.on('end', () => {
//     console.log(data);
// });

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codifi, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}
let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)