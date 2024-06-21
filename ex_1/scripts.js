let currentImageIndex = 0;
const images = [
    "flamengo.png",
    "botafogo.png",
    "vasco.png",
    "fluminense.png"
];

const teamNames = [
    "Flamengo",
    "Botafogo",
    "Vasco",
    "Fluminense"
];

function initializeImage() {
    document.getElementById("teamImage").src = images[currentImageIndex];
    document.getElementById("teamName").textContent = teamNames[currentImageIndex];
}

function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        document.getElementById("teamImage").src = images[currentImageIndex];
        document.getElementById("teamName").textContent = teamNames[currentImageIndex];
        document.getElementById("prevButton").style.display = "inline-block";
    }
    if (currentImageIndex === images.length - 1) {
        document.getElementById("nextButton").style.display = "none";
    }
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById("teamImage").src = images[currentImageIndex];
        document.getElementById("teamName").textContent = teamNames[currentImageIndex];
        document.getElementById("nextButton").style.display = "inline-block";
    }
    if (currentImageIndex === 0) {
        document.getElementById("prevButton").style.display = "none";
    }
}

// Chama a função de inicialização quando a página carrega
window.onload = initializeImage;
