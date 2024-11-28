// Matriz de templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }
];

// Crear tarjetas dinámicas para cada templo
temples.forEach(temple => {
  const templeCard = document.createElement('div');
  templeCard.classList.add('temple-card');
  templeCard.setAttribute('data-dedicated-year', new Date(temple.dedicated).getFullYear());
  templeCard.setAttribute('data-area', temple.area);

  templeCard.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
  `;

  document.getElementById('temple-cards-container').appendChild(templeCard);
});

// Funciones para los filtros de navegación
function mostrarTodos() {
  const cards = document.querySelectorAll('.temple-card');
  cards.forEach(card => card.style.display = 'block');
}

function filtrarAntiguos() {
  const cards = document.querySelectorAll('.temple-card');
  cards.forEach(card => {
    const year = parseInt(card.getAttribute('data-dedicated-year'));
    card.style.display = (year < 1900) ? 'block' : 'none';
  });
}

function filtrarNuevos() {
  const cards = document.querySelectorAll('.temple-card');
  cards.forEach(card => {
    const year = parseInt(card.getAttribute('data-dedicated-year'));
    card.style.display = (year > 2000) ? 'block' : 'none';
  });
}

function filtrarGrandes() {
  const cards = document.querySelectorAll('.temple-card');
  cards.forEach(card => {
    const area = parseInt(card.getAttribute('data-area'));
    card.style.display = (area > 90000) ? 'block' : 'none';
  });
}

function filtrarPequenos() {
  const cards = document.querySelectorAll('.temple-card');
  cards.forEach(card => {
    const area = parseInt(card.getAttribute('data-area'));
    card.style.display = (area < 10000) ? 'block' : 'none';
  });
}

// Asignación de eventos a los botones de navegación
document.getElementById('filter-all').addEventListener('click', mostrarTodos);
document.getElementById('filter-ancient').addEventListener('click', filtrarAntiguos);
document.getElementById('filter-new').addEventListener('click', filtrarNuevos);
document.getElementById('filter-large').addEventListener('click', filtrarGrandes);
document.getElementById('filter-small').addEventListener('click', filtrarPequenos);

// Mostrar el año actual y la fecha de última modificación
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear}`;

const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;
