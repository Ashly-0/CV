function toggleMenu() {
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");

}

function fixPhotoOnScroll() {
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';
}

window.addEventListener("scroll",fixPhotoOnScroll, false);

function showImage(image) {
    var newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.removeAttribute('onclick');

    var modal = document.getElementById('preview');
    modal.classList.add('showModal');

    var existingImage = modal.querySelector('img');
    if (existingImage) {
        modal.removeChild(existingImage);
    }
    
    modal.appendChild(newImage);
}


document.addEventListener("click", function(event) {
    var modal = document.getElementById('preview');
    if (modal.classList.contains('showModal') && event.target === modal) {
        cerrarModal();
    }
});

function cerrarModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
}


