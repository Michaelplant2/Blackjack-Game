let card = [];
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11];
let deckOfCards = [...cards, ...cards, ...cards, ...cards];
let sum = 0;
let win = 0;
let lose = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let oddsEl = document.getElementById("odds-el");

oddsEl.textContent = "WIN: " + win + " / " + "LOSS: " + lose;

function getRandomCard() {
    Math.floor(Math.random() * deckOfCards.length);
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard= getRandomCard();
    card = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
    if (sum === 21) {
        win ++;
    }
    oddsEl.textContent = "WIN: " + win + " / " + "LOSS: " + lose;
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You bust";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function hit() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    if (sum === 21) {
        win ++;
    } else if (sum > 21) {
        lose ++
    }
    oddsEl.textContent = "WIN: " + win + " / " + "LOSS: " + lose;
}

function stay() {
    if (sum <= 21 && sum >= 15) {
        win ++;
    }
    oddsEl.textContent = "WIN: " + win + " / " + "LOSS: " + lose;
}

function reset() {
    window.location.reload();
}