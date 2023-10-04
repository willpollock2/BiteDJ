// Get canvas element and context
const canvas = document.getElementById('pizzaChart');
const ctx = canvas.getContext('2d');

// Improve rendering quality
const dpr = window.devicePixelRatio || 1;
canvas.style.width = '400px';
canvas.style.height = '400px';
canvas.width = 400 * dpr;
canvas.height = 400 * dpr;
ctx.scale(dpr, dpr);

// Your existing data and functions
const basePrices = [6.49, 8.99, 9.49, 9.99, 10.49, 10.99];
const taxes = basePrices.map(price => price * 0.06); // 6% tax
const tips = basePrices.map(price => price * 0.15); // 15% tip

function initMap() {
    const mapOptions = {
        center: {lat: 43.60000, lng: -116.203710},  // Change this to your desired coordinates or get from a location API
        zoom: 14
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create a Places service object
    const service = new google.maps.places.PlacesService(map);

    // Define search parameters with the keyword 'pizza'
    const request = {
        location: mapOptions.center,
        radius: '2000',
        type: ['restaurant'],
        keyword: 'pizza'
    };

    // Perform a nearby search using the Places API
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    });

    // Create markers for each place found
    function createMarker(place) {
        new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
        });
    }
}


const data = {
    labels: ['Blaze PIzza', 'OvenFresh', 'City Slice', 'Domino\'s', 'Pizza Hut', 'Red Bench'],
    datasets: [{
        label: 'Base Price ($)',
        data: basePrices,
        backgroundColor: '#fc3434',
        borderColor: '#fc3434',
        borderWidth: 1
    }, {
        label: 'Tax ($)',
        data: taxes,
        backgroundColor: '#555555',
        borderColor: '#555555',
        borderWidth: 1
    }, {
        label: 'Tip ($)',
        data: tips,
        backgroundColor: '#888888',
        borderColor: '#666666',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                grid: {
                    color: '#3a3a3a'
                },
                ticks: {
                    color: '#e6e6e6'
                }
            },
            x: {
                stacked: true,
                grid: {
                    color: '#3a3a3a'
                },
                ticks: {
                    color: '#e6e6e6'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "#e6e6e6"
                }
            }
        }
    }
};

const pizzaChart = new Chart(ctx, config);
