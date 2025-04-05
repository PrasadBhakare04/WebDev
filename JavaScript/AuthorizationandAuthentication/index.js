const bcrypt = require('bcrypt');

const hashPassword = async function (pw) {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async function (pw, hash) {
    const isTrue = await bcrypt.compare(pw, hash);
    if (isTrue) {
        console.log('logged in');
    }
    else {
        console.log('Incorrect password')
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$rXQYPv6S58Sr0pJyDUiyEOmZEcunjhBnMNjW6tl0J5RBF6xR1mmJe');