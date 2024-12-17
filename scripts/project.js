
// LocalStorage to count the number of submissions
const form = document.querySelector('form');
const counterValue = document.getElementById('counterValue');

let count = localStorage.getItem('participationCount') || 0;
counterValue.textContent = count;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    count++;
    localStorage.setItem('participationCount', count);
    counterValue.textContent = count;
    alert("Thank you for participating!");
    form.reset();
});
