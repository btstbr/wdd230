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

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Salva o estado do modo escuro no armazenamento local
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Verifica se o modo escuro estava ativado anteriormente
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
}







