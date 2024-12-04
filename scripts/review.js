/*// Función para obtener los parámetros de la URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Al cargar la página, obtener los datos y mostrarlos
window.onload = function () {
    // Obtener los parámetros de la URL
    const productName = getQueryParam('product_name');
    const rating = getQueryParam('overall');
    const installDate = getQueryParam('install');
    const features = getQueryParam('features');
    const writtenReview = getQueryParam('review');
    const userName = getQueryParam('user');

    // Mostrar los datos en la página
    document.getElementById('product_name').textContent = productName || 'No especificado';
    document.getElementById('rating').textContent = rating ? `★ ${rating} estrellas` : 'No especificado';
    document.getElementById('install_date').textContent = installDate || 'No especificado';
    document.getElementById('features').textContent = features ? features.replace(/&/g, ', ') : 'No especificado';
    document.getElementById('written_review').textContent = writtenReview || 'No especificado';
    document.getElementById('user_name').textContent = userName || 'Anónimo';

    // Contar cuántas reseñas se han completado
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    document.getElementById('review_count').textContent = reviewCount;
};*/

// Función para obtener los parámetros de la URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Al cargar la página, obtener los datos y mostrarlos
window.onload = function () {
    // Obtener los parámetros de la URL
    const productName = getQueryParam('product_name');
    const rating = getQueryParam('overall');
    const installDate = getQueryParam('install');
    const features = getQueryParam('features');
    const writtenReview = getQueryParam('review');
    const userName = getQueryParam('user');

    // Mostrar los datos en la página
    document.getElementById('product_name').textContent = productName || 'No especificado';
    document.getElementById('rating').textContent = rating ? `★ ${rating} estrellas` : 'No especificado';
    document.getElementById('install_date').textContent = installDate || 'No especificado';
    document.getElementById('features').textContent = features ? features.replace(/&/g, ', ') : 'No especificado';
    document.getElementById('written_review').textContent = writtenReview || 'No especificado';
    document.getElementById('user_name').textContent = userName || 'Anónimo';

    // Contar cuántas reseñas se han completado
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    document.getElementById('review_count').textContent = reviewCount;
};
