// gallery.js
const galleryImages = document.querySelectorAll('.gallery-img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = img.src;
    });
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});
