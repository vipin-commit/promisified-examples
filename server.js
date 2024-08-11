const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { timeout, readFile } = require('./promisify');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Timeout endpoint
app.get('/timeout', async (req, res) => {
    const ms = parseInt(req.query.ms, 10);
    if (isNaN(ms)) {
        return res.status(400).send('Invalid number of milliseconds.');
    }
    await timeout(ms);
    res.send(`${ms / 1000} seconds have passed.`);
});

// Fetch endpoint
app.post('/fetch', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).send('URL is required.');
    }

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data: ' + error.message);
    }
});

// Read file endpoint
app.get('/readfile', async (req, res) => {
    const filePath = path.join(__dirname, 'example.txt');
    console.log(`Reading file from: ${filePath}`);

    try {
        const fileContent = await readFile(filePath, 'utf8');
        console.log('File content:', fileContent);
        res.send(fileContent);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading file: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
