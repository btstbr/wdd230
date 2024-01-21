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
