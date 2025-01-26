// API Access Key
const accessKey = "aBOvxp6OFtYAMn5j2CpgAhRMDuALhhiwea0_L5_Z69I"; // Buraya sizin Access Key'inizi yazdım

// Uzay temalı görselleri çekmek için Unsplash API URL
const apiUrl = `https://api.unsplash.com/photos/random?query=space&client_id=${accessKey}&count=10`; // 10 resim çekiyoruz

// HTML öğelerini seçiyoruz
const alienImage = document.getElementById("alienImage");
const alienText = document.getElementById("alienText");
const messageElement = document.getElementById("message");

// Uzaylı ve uzay temalı metinler
const alienMessages = [
    "Crypto is the future. Are you ready to join us?",
    "We come from space, and we brought the best crypto technologies!",
    "Invest in crypto, and you’ll join the intergalactic economy!",
    "The future of money is digital, and it’s time to invest!",
    "We’ve been mining crypto from the deepest galaxies!"
];

const alienPhrases = [
    "The planets are aligned for crypto profits!",
    "Earth’s economy is about to be disrupted!",
    "The crypto revolution is coming from the stars!",
    "To the moon and beyond with crypto!",
    "Space is the limit for crypto investments!"
];

// Görselleri ve metinleri değiştirecek fonksiyon
function changeContent() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Rasgele bir görsel seçiyoruz
            const randomImage = data[0].urls.regular;  // İlk resmi alıyoruz
            alienImage.src = randomImage;  // Görseli sayfada gösteriyoruz
            
            // Rasgele bir mesaj seçiyoruz
            const randomMessage = alienMessages[Math.floor(Math.random() * alienMessages.length)];
            messageElement.innerText = randomMessage;
            
            // Rasgele bir uzaylı sözü seçiyoruz
            const randomText = alienPhrases[Math.floor(Math.random() * alienPhrases.length)];
            alienText.innerText = randomText;
        })
        .catch(error => {
            console.error("Error fetching images: ", error);
        });
}

//
