const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");

const dealerPoints = document.getElementById("dealer-points");
const playerPoints = document.getElementById("player-points");

const dealBtn = document.getElementById("deal-button");
const hitBtn = document.getElementById("hit-button");
const standBtn = document.getElementById("stand-button");

const suits = ["hearts", "diamonds", "clubs", "spades"];

let deck = [];
let dealerCards = [];
let playerCards = [];

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
    const card = getCard();
    playerCards.push(card);
    renderCard(card, playerHand);
};

const addDealerCard = () => {
    const card = getCard();
    dealerCards.push(card);
    renderCard(card, dealerHand);
};

const dealCards = () => {
    addPlayerCard();
    addDealerCard();
    addPlayerCard();
    addDealerCard();
};

const renderCard = (card, targetElement) => {
    const img = document.createElement("img");
    img.src = `./images/${card.rank}_of_${card.suit}.png`;
    targetElement.append(img);
};

const checkBust = (sum, targetCards) => {
    switch (sum) {
        case 21:
            resetGame();
            break;
        default:
            if (sum > 21) {
                for (let card of targetCards) {
                    if (card.rank === 1) {
                        sum -= 10;
                        return sum;
                    }
                }
                resetGame();
            }
            return sum;
    }
};

const sumCards = targetCards => {
    let sum = 0;
    for (let card of targetCards) {
        sum += card.value.primary;
    }
    return checkBust(sum, targetCards);
};

const renderDealerSums = () => {
    const dealerCardSum = sumCards(dealerCards);
    dealerPoints.innerText = null;
    dealerPoints.append(dealerCardSum);
};

const renderPlayerSums = () => {
    const playerCardSum = sumCards(playerCards);
    playerPoints.innerText = null;
    playerPoints.append(playerCardSum);
};

const initGame = () => {
    deck = [];
    dealerCards = [];
    playerCards = [];
    dealerPoints.innerText = null;
    playerPoints.innerText = null;
    dealerHand.innerHTML = null;
    playerHand.innerHTML = null;
    dealBtn.removeAttribute("disabled", "disabled");
};

const resetGame = () => {
    setTimeout(initGame, 2000);
    setTimeout(createDeck, 2000);
};

createDeck();

dealBtn.onclick = () => {
    dealBtn.setAttribute("disabled", "disabled");
    hitBtn.removeAttribute("disabled", "disabled");
    dealCards();
    renderDealerSums();
    renderPlayerSums();
};

hitBtn.onclick = () => {
    addPlayerCard();
    renderPlayerSums();
};

standBtn.onclick = () => {
    hitBtn.setAttribute("disabled", "disabled");
    while (sumCards(dealerCards) < 18) {
        addDealerCard();
        renderDealerSums();
    }
    resetGame();
};
