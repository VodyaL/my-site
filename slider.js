const images = [
    'image/zal1.jpg',
    'image/zal2.jpg',
    'image/zal3.jpg',
    'image/zal4.jpg',
    'image/zal5.jpg'
];

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');
let currentIndex = 0;

function updateImage(index) {
    sliderImage.src = images[index];
    imageCounter.textContent = `${index + 1} / ${images.length}`;
}

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

updateImage(currentIndex);

