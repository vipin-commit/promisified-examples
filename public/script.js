async function triggerTimeout() {
    const response = await fetch('/timeout');
    const result = await response.text();
    document.getElementById('output').innerText = result;
}

async function triggerFetch() {
    const response = await fetch('/fetch');
    const data = await response.json();
    document.getElementById('output').innerText = JSON.stringify(data, null, 2);
}

async function triggerReadFile() {
    const response = await fetch('/readfile');
    const result = await response.text();
    document.getElementById('output').innerText = result;
}
