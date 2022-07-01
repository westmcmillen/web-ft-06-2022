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
    return { suit, rank, value: rank > 10 ? 10 : rank };
};

const createDeck = () => {
    for (let suit of suits) {
        for (let rank = 1; rank <= 13; rank++) {
            deck.push(createCard(suit, rank));
        }
    }
};

const getCard = () => {
    const randInt = Math.floor(Math.random() * (deck.length - 1)) + 1;
    const card = deck.splice(randInt, 1)[0];
    return card;
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

const getSum = targetHand => {
    let sum = null;
    for (let card of targetHand) {
        sum += card.value;
    }
    return handleSum(sum, targetHand);
};

// const handleAce = (sum, targetHand) => {};

// Refactor
const handleSum = (sum, targetHand) => {
    if (sum <= 11) {
        for (let card of targetHand) {
            if (card.rank === 1) {
                sum += 10;
                if (sum === 21) {
                    stopGame();
                    return "Blackjack";
                }
                return sum;
            }
        }
    }
    if (sum === 21) {
        stopGame();
        return "Blackjack";
    }
    if (sum > 21) {
        stopGame();
        return "Bust";
    }
    return sum;
};

const setSums = () => {
    dealerPoints.innerText = getSum(dealerCards);
    playerPoints.innerText = getSum(playerCards);
};

const setBtnEnable = button => {
    button.disabled = false;
};

const setBtnDisable = button => {
    button.disabled = true;
};

const stopGame = () => {
    setBtnDisable(dealBtn);
    setBtnDisable(hitBtn);
    setBtnDisable(standBtn);
    setTimeout(initGame, 3000);
};

const setResults = () => {
    const dealerSum = getSum(dealerCards);
    const playerSum = getSum(playerCards);
    if (playerSum <= 21 && playerSum > dealerSum) {
        playerPoints.innerText = "Winner";
    }
    if (dealerSum <= 21 && dealerSum > playerSum) {
        dealerPoints.innerText = "Winner";
    }
    if (dealerSum === playerSum) {
        dealerPoints.innerText = "Draw";
        playerPoints.innerText = "Draw";
    }
};

const initGame = () => {
    deck = [];
    dealerCards = [];
    playerCards = [];
    dealerPoints.innerText = null;
    playerPoints.innerText = null;
    dealerHand.innerHTML = null;
    playerHand.innerHTML = null;
    setBtnEnable(dealBtn);
};

const toggleBtnEnable = target => {
    switch (target) {
        case dealBtn:
            setBtnDisable(dealBtn);
            setBtnEnable(hitBtn);
            setBtnEnable(standBtn);
            break;
        case standBtn:
            setBtnDisable(hitBtn);
            setBtnDisable(standBtn);
            break;
    }
};

dealBtn.onclick = ({ target }) => {
    toggleBtnEnable(target);
    createDeck();
    dealCards();
    setSums();
};

hitBtn.onclick = () => {
    addPlayerCard();
    setSums();
};

standBtn.onclick = ({ target }) => {
    toggleBtnEnable(target);
    while (getSum(dealerCards) < 17) {
        addDealerCard();
        setSums();
    }
    setResults();
    stopGame();
};
