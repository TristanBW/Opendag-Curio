

document.querySelectorAll('.popup-img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        modalImg.src = this.src;
        modal.classList.add('active');
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('imageModal').classList.remove('active');
});


document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});