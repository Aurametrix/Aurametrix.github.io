const parkingLotElement = document.querySelector('.parking-lot');
const parkCarBtn = document.getElementById('park-car-btn');
const removeCarBtn = document.getElementById('remove-car-btn');

// Initialize parking lot with 10 spots
const parkingLot = [];
for (let i = 0; i < 10; i++) {
    parkingLot.push({ id: i, occupied: false });
}

// Render parking lot
function renderParkingLot() {
    parkingLotElement.innerHTML = '';
    parkingLot.forEach((spot) => {
        const spotElement = document.createElement('div');
        spotElement.classList.add('parking-spot');
        spotElement.textContent = `Spot ${spot.id}`;
        if (spot.occupied) {
            spotElement.classList.add('occupied');
        }
        parkingLotElement.appendChild(spotElement);
    });
}

// Park car
function parkCar() {
    const emptySpot = parkingLot.find((spot) => !spot.occupied);
    if (emptySpot) {
        emptySpot.occupied = true;
        renderParkingLot();
    } else {
        alert('No available parking spots!');
    }
}

// Remove car
function removeCar() {
    const occupiedSpot = parkingLot.find((spot) => spot.occupied);
    if (occupiedSpot) {
        occupiedSpot.occupied = false;
        renderParkingLot();
    } else {
        alert('No cars to remove!');
    }
}

// Event listeners
parkCarBtn.addEventListener('click', parkCar);
removeCarBtn.addEventListener('click', removeCar);

// Initial render
renderParkingLot();