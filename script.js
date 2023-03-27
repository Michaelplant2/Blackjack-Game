let cards = [];
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
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard= getRandomCard();
    cards = [firstCard, secondCard];
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
    } else {
        lose++;
    }
    oddsEl.textContent = "WIN: " + win + " / " + "LOSS: " + lose;
}

function reset() {
    window.location.reload();
}