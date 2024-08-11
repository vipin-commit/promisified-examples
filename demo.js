const { timeout, readFile } = require('./promisify');

async function demo() {
  // Dynamic import for node-fetch
  const fetch = (await import('node-fetch')).default;

  // Demonstrate timeout
  console.log('1.Waiting for 5 seconds...\n\n');
  await timeout(5000);
  console.log('5 seconds have passed.\n\n');

  // Demonstrate fetch
  console.log('2.Fetching data from https://jsonplaceholder.typicode.com/todos/1');
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log('   Fetched data:', data,"\n\n");

  // Demonstrate readFile
  console.log('3.Reading content of example.txt...');
  try {
    const fileContent = await readFile('example.txt', 'utf8');
    console.log('   File content:', fileContent,"\n\n");
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

demo();
