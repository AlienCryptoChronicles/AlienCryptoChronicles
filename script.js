const aliens = ['green', 'blue', 'pink'];
const alienMessages = [
    "Crypto is the future. Are you ready to join us?",
    "We come from space, and we brought the best crypto technologies!",
    "Invest in crypto, and you’ll join the intergalactic economy!",
    "The future of money is digital, and it’s time to invest!",
    "We’ve been mining crypto from the deepest galaxies!"
];

let alienIndex = 0;
let messageIndex = 0;

const button = document.getElementById('changeAlienButton');
const alien = document.querySelector('.alien');
const h1 = document.querySelector('h1');

// Button'a tıklanınca uzaylıyı değiştir ve mesajı değiştir
button.addEventListener('click', () => {
    // Uzaylıyı değiştir
    alienIndex = (alienIndex + 1) % aliens.length;
    alien.className = `alien ${aliens[alienIndex]}`;

    // Mesajı değiştir
    messageIndex = (messageIndex + 1) % alienMessages.length;
    h1.textContent = alienMessages[messageIndex];
});
