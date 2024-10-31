
// Obtener el año actual
const currentYear = new Date().getFullYear();
// Mostrar el año en el elemento con id "currentyear" con el símbolo de copyright
document.getElementById("currentyear").textContent = `© ${currentYear}`;

// Obtener la última fecha de modificación del documento
const lastModifiedDate = document.lastModified;
// Seleccionar el elemento con el id "lastModified" y mostrar la fecha
document.getElementById("lastModified").textContent = lastModifiedDate;


/*
let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
*/