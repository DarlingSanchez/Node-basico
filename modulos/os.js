const os = require('os');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.cpus().length);
// console.log(os.constants);

console.log('Espacio libre en memoria');

const size = 1024;

function kb(bytes) { return bytes / size };

function mb(bytes) { return kb(bytes) / size };

function gb(bytes) { return mb(bytes) / size };

console.log('BYTES: ' + os.freemem());
console.log('KB: ' + kb(os.freemem()));
console.log('MB: ' + mb(os.freemem()));
console.log('GB: ' + gb(os.freemem()));