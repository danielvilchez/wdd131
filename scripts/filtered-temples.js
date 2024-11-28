// Obtener el año actual y mostrarlo en el footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = `© ${currentYear}`;

// Obtener la última fecha de modificación del documento
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

// Datos de los templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Calle Cusco 380, Carmen Alto, Distrito De Cayma, Arequipa, Arequipa, Peru",
    dedicated: "167th dedicated temple in operation",
    area: 11500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Calle del Templo N°2, Madrid, 28030 Madrid, Spain",
    dedicated: "56th dedicated temple in operation",
    area: 11500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Via di Settebagni 376, Rome, RM, Italy",
    dedicated: "162nd dedicated temple in operation",
    area: 11500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

// Función para crear las tarjetas de los templos
function createTempleCard() {
  temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("srcset", `${temple.imageUrl} 800w, ${temple.imageUrl} 400w`);
    img.setAttribute("sizes", "(max-width: 600px) 400px, 800px");
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}

// Función para filtrar los templos según las categorías
function filterTemples(filter) {
  const filteredTemples = temples.filter(temple => {
    switch (filter) {
      case 'old':
        return new Date(temple.dedicated) < new Date('2000-01-01');
      case 'new':
        return new Date(temple.dedicated) >= new Date('2000-01-01');
      case 'large':
        return temple.area > 50000;
      case 'small':
        return temple.area <= 50000;
      default:
        return true;
    }
  });

  // Limpiar la galería y agregar los templos filtrados
  document.querySelector(".res-grid").innerHTML = '';
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("srcset", `${temple.imageUrl} 800w, ${temple.imageUrl} 400w`);
    img.setAttribute("sizes", "(max-width: 600px) 400px, 800px");
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}

// Llamar la función de crear las tarjetas de templos cuando la página cargue
createTempleCard();
