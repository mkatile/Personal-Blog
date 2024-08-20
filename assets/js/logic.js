
// LIGHT AND DARK MODE
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

