const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const standButton = document.getElementById("stand-button");
const hitButton = document.getElementById("hit-button");
const dealButton = document.getElementById("deal-button");
const dealerTotal = document.getElementById("dealer-total");
const playerTotal = document.getElementById("player-total");
const jumbotron = document.getElementById("jumbotron");
const decrementButton = document.getElementById("decrement-button");
const incrementButton = document.getElementById("increment-button");
const count = document.getElementById("count");
const bankroll = document.getElementById("bankroll");

const suits = ["clubs", "diamonds", "hearts", "spades"];

let deck = [];
let dealerCards = [];
let playerCards = [];
let kitty = [];
let counter = 0;
let balance = 10000;

// creates a deck of cards
const createDeck = () => {
    deck.push({ rank: 0, suit: null, value: null });
    suits.forEach(suit => {
        for (let rank = 1; rank <= 13; rank++) {
            deck.push({ rank, suit, value: rank > 10 ? 10 : rank });
        }
    });
};

// gets a random card from the deck
const getCard = () => {
    const randInt = Math.floor(Math.random() * (deck.length - 1));
    if (deck.length) return deck.splice(randInt, 1)[0];
};

// pushes a card to an array
const pushCard = (card, targetCards) => {
    targetCards.push(card);
};

// creates a card element
const createCardElement = () => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    return cardElement;
};

// renders a card element
const renderCardElement = (card, targetHand) => {
    const cardElement = createCardElement();
    cardElement.style.backgroundImage = `url("../img/cards/${card.rank}_of_${card.suit}.png")`;
    targetHand.append(cardElement);
};

// centers card elements
const centerCardElements = targetHand => {
    [...targetHand.children].forEach((card, index) => {
        card.style.gridColumn = `${index + 1} / ${index + 3}`;
    });
};

// checks to see if the last card drawn was the last card in the deck
const isLastCard = () => {
    if (deck.length === 0) return true;
};

// sets the counter
const setCounter = card => {
    if (card.value > 0 && card.value <= 6) counter += 1;
    if (card.value >= 10) counter -= 1;
};

// renders the counter
const renderCounter = () => {
    count.innerText = counter;
};

// creates and renders a card
const addCard = (targetCards, targetHand) => {
    const card = getCard();
    const cardElement = createCardElement();
    pushCard(card, targetCards);
    renderCardElement(card, targetHand);
    centerCardElements(targetHand);
    setCounter(card);
    if (isLastCard()) {
        createDeck();
        initCounter();
    }
};

// adds a hole card to the dealer's hand
const addHoleCard = () => {
    const card = { rank: null, suit: null, value: null };
    const cardElement = createCardElement();
    renderCardElement(card, dealerHand);
    centerCardElements(dealerHand);
};

// deals cards
const dealCards = () => {
    addCard(playerCards, playerHand);
    addCard(dealerCards, dealerHand);
    addCard(playerCards, playerHand);
    addHoleCard();
};

// gets the sum of the cards in a hand
const getSumCards = targetCards => {
    return targetCards.map(card => card.value).reduce((a, b) => a + b, 0);
};

// adjusts the sum of the cards if a hand has a joeker or ace
const adjustSumCards = (sumCards, targetCards) => {
    const cardHash = {};
    targetCards.forEach(card => {
        cardHash[card.rank] = (cardHash[card.value] || 0) + 1;
    });
    if (1 in cardHash) {
        if (sumCards + 10 <= 21) {
            sumCards += 10;
        }
    }
    if (0 in cardHash) {
        sumCards = 0;
    }
    return sumCards;
};

// checks if a hand has a joeker
const hasJoeker = targetCards => {
    return targetCards.some(card => card.rank === 0);
};

// checks if a hand has an ace
const hasAce = targetCards => {
    return targetCards.some(card => card.rank === 1);
};

// gets the total value of a hand
const getAdjustedSumCards = targetCards => {
    let sum = getSumCards(targetCards);
    if (hasAce || hasJoeker) {
        sum = adjustSumCards(sum, targetCards);
    }
    return sum;
};

// flips the hole card in the dealer's hand
const flipHoleCard = () => {
    dealerHand.lastElementChild.remove();
    addCard(dealerCards, dealerHand);
};

// adds a card to dealer's hand until 17 or bust
const dealerDraws = () => {
    flipHoleCard();
    if (hasJoeker(dealerCards)) compareHands();
    while (getAdjustedSumCards(dealerCards) !== 0 && getAdjustedSumCards(dealerCards) < 17) {
        addCard(dealerCards, dealerHand);
        if (hasJoeker(dealerCards)) compareHands();
    }
};

// renders the totals of each hand
const renderTotals = () => {
    dealerTotal.innerText = getAdjustedSumCards(dealerCards);
    playerTotal.innerText = getAdjustedSumCards(playerCards);
};

// checks to see if the player has blackjack
const playerHasBlackjack = () => {
    if (playerCards.length == 2 && getAdjustedSumCards(playerCards) === 21) return true;
};

// dealer wins
const dealerWins = () => {
    disableButton(standButton);
    disableButton(hitButton);
    disableButton(dealButton);
    disableButton(decrementButton);
    disableButton(incrementButton);
    jumbotron.innerHTML = null;
    jumbotron.className = "dealer-wins";
};

// player wins
const playerWins = () => {
    disableButton(standButton);
    disableButton(hitButton);
    disableButton(dealButton);
    disableButton(decrementButton);
    disableButton(incrementButton);
    jumbotron.innerHTML = null;
    jumbotron.className = "player-wins";
    balance += getSumKitty() * 2;
    bankroll.innerText = `+${getSumKitty() * 2}`;
};

// draw
const draw = () => {
    disableButton(standButton);
    disableButton(hitButton);
    disableButton(dealButton);
    disableButton(decrementButton);
    disableButton(incrementButton);
    jumbotron.innerHTML = null;
    jumbotron.className = "draw";
    balance += getSumKitty();
    bankroll.innerText = "+0";
};

// compares the hands to determine outcome
const compareHands = () => {
    const finalDealerSum = getAdjustedSumCards(dealerCards);
    const finalPlayerSum = getAdjustedSumCards(playerCards);
    if (finalPlayerSum > 21 && finalDealerSum <= 21) return dealerWins();
    if (finalDealerSum > 21 && finalPlayerSum <= 21) return playerWins();
    if (finalDealerSum > finalPlayerSum && finalDealerSum <= 21) return dealerWins();
    if (finalDealerSum === finalPlayerSum) return draw();
    if (finalDealerSum < finalPlayerSum && finalPlayerSum <= 21) return playerWins();
    if (finalDealerSum === 0) return playerWins();
    if (finalPlayerSum === 0) return dealerWins();
};

// creates a chip
const createChip = () => {
    const chip = { value: 100 };
    kitty.push(chip);
};

// deletes a chip
const deleteChip = () => {
    kitty.pop();
};

// renders a chip element
const renderChipElement = () => {
    const chipElement = document.createElement("div");
    chipElement.className = "chip";
    chipElement.innerText = "100";
    jumbotron.append(chipElement);
};

// removes a chip element
const removeChipElement = () => {
    jumbotron.lastElementChild.remove();
};

// gets the sum of the kitty
const getSumKitty = () => {
    return kitty.map(chip => chip.value).reduce((a, b) => a + b, 0);
};

// discards the used cards
const clearCards = () => {
    dealerCards = [];
    playerCards = [];
};

// clears the kitty
const clearKitty = () => {
    kitty = [];
};

// removes the used card elements
const removeCards = () => {
    dealerHand.innerHTML = null;
    playerHand.innerHTML = null;
};

// clears the competitor totals
const removeTotals = () => {
    dealerTotal.innerText = null;
    playerTotal.innerText = null;
};

// clears the table after each hand
const clearTable = () => {
    clearCards();
    removeCards();
    clearKitty();
    removeTotals();
    jumbotron.className = "place-bet";
    bankroll.innerText = balance;
    enableButton(incrementButton);
};

// initializes the deck
const initDeck = () => {
    deck = [];
    createDeck();
};

// initializes the counter
const initCounter = () => {
    counter = 0;
};

// initializes the counter
const initBalance = () => {
    balance = 10000;
};

// initializes table the for a new game
const initTable = () => {
    clearTable();
    initDeck();
    initCounter();
    initBalance();
    disableButton(standButton);
    disableButton(hitButton);
    disableButton(dealButton);
    disableButton(decrementButton);
};

// disables a button
const disableButton = button => {
    button.disabled = true;
};

// enables a button
const enableButton = button => {
    button.disabled = false;
};

initTable();

standButton.onclick = () => {
    dealerDraws();
    renderTotals();
    renderCounter(counter);
    compareHands();
    setTimeout(() => clearTable(), 3000);
};

hitButton.onclick = () => {
    addCard(playerCards, playerHand);
    renderTotals();
    renderCounter(counter);
    if (getAdjustedSumCards(playerCards) > 21 || hasJoeker(playerCards)) {
        compareHands();
        setTimeout(() => clearTable(), 3000);
    }
};

dealButton.onclick = () => {
    enableButton(standButton);
    enableButton(hitButton);
    disableButton(dealButton);
    disableButton(decrementButton);
    disableButton(incrementButton);
    dealCards();
    renderTotals();
    renderCounter(counter);
    if (playerHasBlackjack()) {
        dealerDraws();
        renderTotals();
        renderCounter(counter);
        compareHands();
        setTimeout(() => clearTable(), 3000);
    }
    if (hasJoeker(dealerCards) || hasJoeker(playerCards)) {
        compareHands();
        setTimeout(() => clearTable(), 3000);
    }
};

decrementButton.onclick = () => {
    deleteChip();
    removeChipElement();
    enableButton(incrementButton);
    if (getSumKitty() === 0) {
        disableButton(dealButton);
        disableButton(decrementButton);
        jumbotron.classList.add("place-bet");
    }
    balance += 100;
    bankroll.innerText = balance;
};

incrementButton.onclick = () => {
    if (balance === 0) return;
    jumbotron.classList.remove("place-bet");
    createChip();
    renderChipElement();
    enableButton(dealButton);
    enableButton(decrementButton);
    if (getSumKitty() === 1000) {
        disableButton(incrementButton);
    }
    balance -= 100;
    bankroll.innerText = balance;
};

// temporary code to demo joeker
document.getElementById("app-header").ondblclick = () => {
    addCard(playerCards, playerHand);
    addCard(dealerCards, dealerHand);
    const card = { rank: 0, suit: null, value: null };
    const cardElement = createCardElement();
    pushCard(card, playerCards);
    renderCardElement(card, playerHand);
    centerCardElements(playerHand);
    setCounter(card);
    addHoleCard();
    compareHands();
    setTimeout(() => clearTable(), 5000);
};
