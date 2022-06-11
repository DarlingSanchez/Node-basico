const bcrypt = require('bcrypt');

const password = 'Darling_2021';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (err, res) => {
        console.log(res);
    })
});