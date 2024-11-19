function submitForm() {
    const device = document.getElementById('device').value;
    const budget = document.getElementById('budget').value;
    const ram = document.getElementById('ram').value;
    const storage = document.getElementById('storage').value;

    // Modify the endpoint URL to your API endpoint
    fetch('http://yourapiendpoint.com/api/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ device, budget, ram, storage })
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to fetch recommendations. Please try again later.');
    });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    if (data && data.length) {
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.textContent = `Product: ${product.name}, Price: ${product.price}`;
            resultsDiv.appendChild(productDiv);
        });
    } else {
        resultsDiv.textContent = 'No products found. Please adjust your criteria.';
    }
}
