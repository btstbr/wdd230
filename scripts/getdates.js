// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the first paragraph in the footer with the copyright year
    const copyrightParagraph = document.querySelector('.copyright_text');
    copyrightParagraph.textContent = `© ${currentYear} Rafael Batista, Brazil`;

    // Update the second paragraph in the footer with the last modified date
    const lastModifiedParagraph = document.querySelector('.last_modified');
    const lastModifiedDate = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
});

function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show');

    // Adicione a lógica para alternar entre os ícones
    var iconOpen = document.querySelector('.icon-open');
    var iconClose = document.querySelector('.icon-close');

    if (nav.classList.contains('show')) {
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
    } else {
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
    }
}

// ********* Page Visits *********

let numVisits = Number(window.localStorage.getItem("numVisitsCounter")) || 0;
const visitsDisplay = document.querySelector(".visits");


if (numVisits === +1) {
    visitsDisplay.textContent = `Welcome! This is your first visit.`;
} else {
    visitsDisplay.textContent = numVisits;
}


numVisits++;


localStorage.setItem("numVisitsCounter", numVisits);

// seuScript.js
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('passwordMatchMessage');

    if (password !== confirmPassword) {
        message.innerHTML = 'Passwords do not match';
        return false;
    } else {
        message.innerHTML = '';
        return true;
    }
}

function updateRatingValue() {
    const ratingValue = document.getElementById('ratingValue');
    const pageRating = document.getElementById('pageRating');
    ratingValue.innerHTML = pageRating.value;
}



