
const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn');
const cartButton = document.getElementById('cartButton');
const carImage = document.getElementById('carImage');

// Al hacer clic en Rojo
redBtn.addEventListener('click', () => {
    carImage.style.backgroundImage = "url('red-benz.png')";
    cartButton.style.backgroundColor = "red";
});

// Al hacer clic en Gris
grayBtn.addEventListener('click', () => {
    carImage.style.backgroundImage = "url('gray-benz.png')";
    cartButton.style.backgroundColor = "#007bff";
});