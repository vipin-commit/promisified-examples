const fs = require('fs');

// Promisified setTimeout
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Promisified readFile
function readFile(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = { timeout, readFile };
