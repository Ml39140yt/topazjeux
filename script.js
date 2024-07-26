const playerHand = document.getElementById('player-hand');
const opponentHand = document.getElementById('opponent-hand');
const drawCardButton = document.getElementById('draw-card-button');

const deck = [
    { name: "La Bête de la Forêt", attack: 1000, defense: 1000, image: "images/la_b__te_de_la_for__t________1000___.png" },
    { name: "La Forêt Magique", attack: 0, defense: 0, image: "images/la_for__t_magique_.png" },
    { name: "La Reine des Ténèbres", attack: 2000, defense: 2000, image: "images/la_reine_des_t__n__bres_______2000___.png" },
    { name: "Le Boxeur Rouge", attack: 1200, defense: 1200, image: "images/le_boxeur_rouge______1200___.png" },
    { name: "Le Crâne d'un Ancien Miner", attack: 1200, defense: 1200, image: "images/le_Cr__ne_d_un_ancien_miner____1200___.png" },
    { name: "Le Crâne des Ténèbres", attack: 1400, defense: 1400, image: "images/le_crane_des_t__n__bres_____1400___.png" },
    { name: "Le Distributeur de Carte", attack: 0, defense: 0, image: "images/le_distributeur_de_carte_.png" },
    { name: "Le Monstre des Cavernes", attack: 1300, defense: 1300, image: "images/Le_monstre_des_caverne______1300___.png" },
    { name: "Le Monstre des Glaces", attack: 1200, defense: 1200, image: "images/le_monstre_des_glace_______1200___.png" },
    { name: "Le Petit Boxeur", attack: 1200, defense: 1200, image: "images/le_petite_boxeur_____1200___.png" },
    { name: "Le Sorcier Squelette", attack: 2100, defense: 2100, image: "images/le_sorcier_squelette____2100___.png" },
    { name: "Le Terrain de la Clairière", attack: 0, defense: 0, image: "images/le_terrain_de_la_clairi__re_.png" },
    { name: "Le Terrain des Monstres des Ténèbres", attack: 0, defense: 0, image: "images/le_terrain_des_monstres_des_t__n__bres (1).png" },
    { name: "Les Esprits de la Forêt", attack: 1500, defense: 1500, image: "images/les_esprits_de_la_for__t_______1500___.png" },
    { name: "Monstre Violet", attack: 1100, defense: 1100, image: "images/monstre_violet________________1100___.png" }
];

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.style.backgroundImage = `url(${card.image})`;
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
