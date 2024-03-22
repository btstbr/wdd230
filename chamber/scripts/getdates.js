const dataURLfeat = "https://btstbr.github.io/wdd230/chamber/data/members.json";

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

// Função para calcular a diferença de dias entre duas datas
function getDaysDifference(currentDate, lastVisitDate) {
    const oneDay = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milissegundos
    const diffDays = Math.round(Math.abs((currentDate - lastVisitDate) / oneDay));
    return diffDays;
}

// Função principal para exibir a mensagem com base na diferença de dias
function displayMessage() {
    const sidebarContent = document.getElementById('sidebar-content');
    const currentDate = new Date();
    const lastVisitDate = localStorage.getItem('lastVisitDate');

    if (!lastVisitDate) {
        sidebarContent.innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = getDaysDifference(currentDate, new Date(lastVisitDate));

        if (daysDifference < 1) {
            sidebarContent.innerText = "Back so soon! Awesome!";
        } else {
            const daysText = daysDifference === 1 ? "day" : "days";
            sidebarContent.innerText = `You last visited ${daysDifference} ${daysText} ago.`;
        }
    }

    // Atualiza a data da última visita no localStorage
    localStorage.setItem('lastVisitDate', currentDate.toISOString());
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', displayMessage);

function setDateTime() {
    // Obtenha a referência do campo datetime
    var datetimeField = document.getElementById('datetime');

    // Defina o valor do campo com a data e hora atuais em milissegundos
    datetimeField.value = Date.now();
}



// ********* Banner *********
document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("banner");
    var closeBannerButton = document.getElementById("closeBanner");

    // Verifica se é segunda, terça ou quarta-feira
    var today = new Date();
    var dayOfWeek = today.getDay(); // Domingo = 0, Segunda = 1, Terça = 2, ..., Sábado = 6
    var isOpenDay = dayOfWeek >= 1 && dayOfWeek <= 7;

    if (isOpenDay) {
        banner.classList.remove("hidden");
    }

    closeBannerButton.addEventListener("click", function () {
        banner.classList.add("hidden");
    });
});

// Função para carregar e exibir membros de destaque aleatórios
function loadSpotlightMembers() {
    fetch(dataURLfeat) // Substitua 'data.json' pelo caminho do seu arquivo JSON
        .then(response => response.json())
        .then(data => {
            // Filtrar membros com status prata ou ouro
            const silverAndGoldMembers = data.members.filter(member => member.membership === "Silver" || member.membership === "Gold");

            // Selecionar aleatoriamente 2 ou 3 membros para exibir
            const selectedMembers = [];
            while (selectedMembers.length < Math.floor(Math.random() * 2) + 2 && silverAndGoldMembers.length > 0) {
                const randomIndex = Math.floor(Math.random() * silverAndGoldMembers.length);
                selectedMembers.push(silverAndGoldMembers[randomIndex]);
                silverAndGoldMembers.splice(randomIndex, 1);
            }



            // Criar HTML para os membros selecionados

            const spotlightCards = document.getElementById('spotlightCards');
            spotlightCards.innerHTML = '';
            selectedMembers.forEach(member => {
                const card = document.createElement('article');
                card.className = 'card';
                card.innerHTML = `
                <img src="${member.logo}" alt="Logo" style="width: 100px; height: auto;">
                <p><b>${member.company}</b></p>
            <p>${member.address}</p>
            <p>${member.address}, ${member.city}, ${member.state} ${member.zip}</p>
            <div class="contact-info">
            <ul>
            <li><a href="tel:${member.phone}">${member.phone}</a></li>
            <li><a href="mailto:${member.website}">${member.website}</a></li>
            <p><b>${member.membership}</b></p>
            </ul>
            </div>
             `;
                spotlightCards.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar membros de destaque:', error));
}

// Carregar membros de destaque ao carregar a página
window.onload = loadSpotlightMembers;
