const fs = require('fs/promises');

// Promisified setTimeout
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Promisified readFile
async function readFile(path, encoding) {
    return await fs.readFile(path, encoding);
}

module.exports = { timeout, readFile };
