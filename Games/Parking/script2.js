const parkingLot = document.getElementById('parking-lot');

// Create parking spots
for (let i = 0; i < 50; i++) {
  const spot = document.createElement('div');
  spot.classList.add('parking-spot');
  parkingLot.appendChild(spot);
}

// Simulate car arrivals (example)
function addCar() {
  const emptySpots = document.querySelectorAll('.parking-spot:not(.occupied-spot)');
  if (emptySpots.length > 0) {
    const randomSpot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
    randomSpot.classList.add('occupied-spot');
  }
}

// Add an event listener to simulate car arrivals (e.g., every 2 seconds)
setInterval(addCar, 2000);