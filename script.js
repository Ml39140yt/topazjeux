const playerHand = document.getElementById('player-hand');
const opponentHand = document.getElementById('opponent-hand');
const drawCardButton = document.getElementById('draw-card-button');

const deck = [
    { name: "Blue-Eyes White Dragon", attack: 3000, defense: 2500 },
    { name: "Dark Magician", attack: 2500, defense: 2100 },
    { name: "Summoned Skull", attack: 2500, defense: 1200 },
    // Ajoutez plus de cartes ici
];

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
        <h3>${card.name}</h3>
        <p>ATK: ${card.attack}</p>
        <p>DEF: ${card.defense}</p>
    `;
    return cardElement;
}

function drawCard() {
    if (deck.length === 0) {
        alert("No more cards in the deck!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];
    const cardElement = createCardElement(card);
    playerHand.appendChild(cardElement);
}

drawCardButton.addEventListener('click', drawCard);
