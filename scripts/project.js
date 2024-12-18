// LocalStorage to count the number of submissions
const form = document.querySelector('#participationForm');
const counterValue = document.getElementById('counterValue');

// Load initial count
let count = parseInt(localStorage.getItem('participationCount')) || 0;
counterValue.textContent = count;

// Array to store participants (data remains in LocalStorage for future reference)
let participants = JSON.parse(localStorage.getItem('participants')) || [];

// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('participantName').value.trim();
    const email = document.getElementById('email').value.trim();
    const eventSelection = document.getElementById('eventSelection').value;

    // Conditional statement to validate input
    if (!name || !email || !eventSelection) {
        alert('Please complete all fields before submitting.');
        return;
    }

    // Increment count and save to LocalStorage
    count++;
    localStorage.setItem('participationCount', count);
    counterValue.textContent = count;

    // Add participant to the array (but do not display it)
    const participant = { name, email, event: eventSelection };
    participants.push(participant);

    // Save the updated array to LocalStorage
    localStorage.setItem('participants', JSON.stringify(participants));

    alert('Thank you for participating!');
    form.reset();
});

