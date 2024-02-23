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

// ********* Page Visits Counter *********

let numVisits = Number(window.localStorage.getItem("numVisitsCounter")) || 0;
const visitsDisplay = document.querySelector(".visits");

// Determine if this is the first visit or display the number of visits.
if (numVisits === 0) {
    visitsDisplay.textContent = `Welcome! This is your first visit.`;
} else {
    visitsDisplay.textContent = numVisits;
}

// visit counter increment
numVisits++;

// store the new visit count total into localStorage
localStorage.setItem("numVisitsCounter", numVisits);



