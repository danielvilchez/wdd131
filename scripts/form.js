/*// Array de productos
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Poblar el select con los productos
const selectElement = document.getElementById("product_name");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Función para actualizar el contador de reseñas en review.html
if (localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", parseInt(localStorage.getItem("reviewCount")) + 1);
} else {
    localStorage.setItem("reviewCount", 1);
}
*/
// Matriz de productos
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

// Función para cargar las opciones dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product_name");
    if (productSelect) {
        // Limpia todas las opciones existentes
        productSelect.innerHTML = '';

        // Agrega un marcador predeterminado como opción no seleccionable
        const defaultOption = document.createElement("option");
        defaultOption.textContent = "Seleccionar un producto...";
        defaultOption.value = ""; // Valor vacío para la opción predeterminada
        defaultOption.disabled = true;
        defaultOption.selected = true;
        productSelect.appendChild(defaultOption);

        // Agrega las opciones de productos dinámicamente
        products.forEach((product) => {
            const option = document.createElement("option");
            option.value = product.id; // Asigna el campo "id" al atributo "value"
            option.textContent = product.name; // Muestra el campo "name"
            productSelect.appendChild(option);
        });
    }
});
