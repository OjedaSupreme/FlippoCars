// Seleccionar los elementos
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;

// Inicializar el índice actual
let currentIndex = 0;

// Mostrar el slide basado en el índice
function showSlide(index) {
    // Asegurarse de que el índice esté dentro del rango de las imágenes
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Desplazar el slider al índice seleccionado
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar de slide según la dirección
function moveSlide(direction) {
    // Cambiar el índice basado en la dirección
    showSlide(currentIndex + direction);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);
