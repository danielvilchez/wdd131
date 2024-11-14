/*
let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
    document.querySelector('h1').classList.toggle('show');
    document.querySelector('#navmenu').classList.toggle('show');
    hambutton.classList.toggle('show');
});

function toggleActive(element) {
    element.classList.toggle("active");
}
*/
// Obtener el año actual
const currentYear = new Date().getFullYear();
// Mostrar el año en el elemento con id "currentyear" con el símbolo de copyright
document.getElementById("currentyear").textContent = `© ${currentYear}`;

// Obtener la última fecha de modificación del documento
const lastModifiedDate = document.lastModified;
// Seleccionar el elemento con el id "lastModified" y mostrar la fecha
document.getElementById("lastModified").textContent = lastModifiedDate;

// Event listeners para manejar click y touch en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        toggleActive(this);
    });
    anchor.addEventListener('touchstart', function () {
        toggleActive(this);
    });
});
