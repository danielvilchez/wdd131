// Incrementar el contador de revisiones utilizando localStorage
document.addEventListener("DOMContentLoaded", () => {
    // Verificar si el contador ya existe en localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
        // Si no existe, inicializarlo en 0
        reviewCount = 0;
    }

    // Incrementar el contador
    reviewCount = parseInt(reviewCount, 10) + 1;

    // Guardar el nuevo valor en localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Mostrar el contador en la página
    const counterDisplay = document.getElementById("review-counter");
    if (counterDisplay) {
        counterDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
});
