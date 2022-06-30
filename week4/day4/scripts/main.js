const dealBtn = document.getElementById("deal-button");
const hitBtn = document.getElementById("hit-button");
const standBtn = document.getElementById("stand-button");

const suits = ["heart", "diamond", "club", "spade"];
const deck = [];
const dealerCards = [];
const playerCards = [];

const createCard = (suit, rank) => {
    return {
        suit: suit,
        rank: rank,
        value: rank === 1 ? { primary: 11, secondary: 1 } : rank > 10 ? { primary: 10 } : { primary: rank },
    };
};

const createDeck = () => {
    for (let rank = 1; rank <= 13; rank++) {
        for (let suit of suits) {
            deck.push(createCard(suit, rank));
        }
    }
};

const getCard = () => {
    const randInt = Math.floor(Math.random() * deck.length - 1) + 1;
    return deck.splice(randInt, 1)[0];
};

const addPlayerCard = () => {
    playerCards.push(getCard());
};

const addDealerCard = () => {
    dealerCards.push(getCard());
};

const dealCards = () => {
    addPlayerCard();
    addDealerCard();
    addPlayerCard();
    addDealerCard();
};

// const renderCards = () => {
//   for ( let card of playerCards ) {

//   }
// }

createDeck();

dealBtn.onclick = () => {
    dealCards();
    console.log(dealerCards);
    console.log(playerCards);
};

hitBtn.onclick = () => {
    addPlayerCard();
    console.log(playerCards);
};

for (let i = 0; i < deck.length; i++) {
    getCard();
}

console.log(deck);
