const { timeout, readFile } = require('./promisify');

async function demo() {
  // Dynamic import for node-fetch
  const fetch = (await import('node-fetch')).default;

  // Demonstrate timeout
  console.log('Waiting for 2 seconds...');
  await timeout(2000);
  console.log('2 seconds have passed.');

  // Demonstrate fetch
  console.log('Fetching data from https://jsonplaceholder.typicode.com/todos/1');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log('Fetched data:', data);

  // Demonstrate readFile
  console.log('Reading content of example.txt...');
  try {
    const fileContent = await readFile('example.txt', 'utf8');
    console.log('File content:', fileContent);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

demo();
