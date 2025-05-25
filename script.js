// Index.html Map
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([9.0820, 8.6753], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([9.0820, 8.6753]).addTo(map)
        .bindPopup('AgriTechNG Headquarters')
        .openPopup();
});

// Predict.html
document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const crop = document.getElementById('crop').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    // Mock API call with animation
    setTimeout(() => {
        document.getElementById('plantTime').textContent = 'June';
        document.getElementById('risk').textContent = 'High pest activity';
        document.getElementById('predictionResult').style.display = 'block';
        // Chart.js for yield prediction
        new Chart(document.getElementById('yieldChart'), {
            type: 'bar',
            data: {
                labels: ['Expected Yield', 'Risk Factor'],
                datasets: [{
                    label: 'Prediction',
                    data: [5000, 30],
                    backgroundColor: ['#2e7d32', '#ff4444'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Crop Yield Prediction'
                    }
                }
            }
        });
    }, 1000); // Simulate loading time
});

// Sensors.html
function refreshSensors() {
    // Mock API call with animation
    setTimeout(() => {
        const data = {
            soilMoisture: 45,
            temperature: 28,
            humidity: 60
        };
        document.getElementById('soilMoisture').textContent = data.soilMoisture + '%';
        document.getElementById('temperature').textContent = data.temperature + '°C';
        document.getElementById('humidity').textContent = data.humidity + '%';
        updateSensorChart('moistureChart', data.soilMoisture, 'Soil Moisture');
        updateSensorChart('tempChart', data.temperature, 'Temperature');
        updateSensorChart('humidityChart', data.humidity, 'Humidity');
    }, 1000);
}

function updateSensorChart(chartId, value, label) {
    new Chart(document.getElementById(chartId), {
        type: 'line',
        data: {
            labels: ['Current', 'Previous'],
            datasets: [{
                label: label,
                data: [value, value - 5],
                borderColor: '#2e7d32',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: label + ' Trends'
                }
            }
        }
    });
}

// Blockchain.html
function fetchTransactions() {
    // Mock API call with animation
    setTimeout(() => {
        const transactions = [
            'Sold 50kg of maize to Buyer X on May 20, 2025 - Delivered',
            'Bought 100kg of rice from Farmer Y on May 18, 2025 - In Transit'
        ];
        const transactionsList = document.getElementById('transactions');
        transactionsList.innerHTML = transactions.map(tx => `<li>${tx}</li>`).join('');
    }, 1000);
}

// Marketplace.html
function buyProduct(product, price) {
    alert(`You are buying ${product} for ₦${price}`);
    // Add animation to button
    const button = event.target;
    button.classList.add('animate__animated', 'animate__tada');
    setTimeout(() => button.classList.remove('animate__animated', 'animate__tada'), 1000);
}

function sellProduct(product, price) {
    alert(`You are selling ${product} for ₦${price}`);
    // Add animation to button
    const button = event.target;
    button.classList.add('animate__animated', 'animate__tada');
    setTimeout(() => button.classList.remove('animate__animated', 'animate__tada'), 1000);
}