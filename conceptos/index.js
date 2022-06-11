console.log('Hola Mundo');

let i = 0;
setInterval(function() {
    console.log(i);
    myFunction();
    i++;
}, 10000);

let myFunction = () => console.log('Holaaaaaaaa');