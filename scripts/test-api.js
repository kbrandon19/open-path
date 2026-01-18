// Test API endpoint
async function testAPI() {
  try {
    const response = await fetch('http://localhost:3000/api/providers');
    const result = await response.json();
    console.log(`API returned ${result.data.length} providers`);
    console.log('First provider:', result.data[0]);
  } catch (error) {
    console.error('Error:', error);
  }
}

testAPI();