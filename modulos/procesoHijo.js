const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

// exec('node modulos/consola.js', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso terminó');
    console.log(proceso.killed);
})