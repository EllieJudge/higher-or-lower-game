let deck = [
    [1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1], // spades, array 0,1
    [1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2, 10.2, 11.2, 12.2, 13.2], // hearts, 1,2
    [1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3], // clubs, 2,3
    [1.4, 2.4, 3.4, 4.4, 5.4, 6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4], // diamonds, 3,4
]

let storedCard

startButton.onclick = beginGame;
lowerButton.onclick = lower;
higherButton.onclick = higher;

function pickCard() {
    let suitIndex = Math.floor(Math.random() * deck.length);
    let suit = deck[suitIndex];
    let cardIndex = Math.floor(Math.random() * suit.length);
    let card = suit[cardIndex]

    deck[suitIndex].splice(cardIndex, 1);

    console.log(deck[suitIndex])
    console.log(card)
    return card;
}

function beginGame() {
    let newCard = pickCard();
    storedCard = newCard;
    alert("card value: " + storedCard);
    document.getElementById("storedCard").src = `./IMGS/card${storedCard}.jpeg`
}

function lower() {
    let newCard = pickCard()
    storedCard = newCard //added
    if (newCard < storedCard) {
        alert("you win this round, new card: " + newCard + ", lower than stored card: " + storedCard + ", play again?")
    } else alert("you lose, new card: " + newCard + ", higher than stored card: " + storedCard)
    //location.reload()
    document.getElementById("newCard").src = `./IMGS/card${newCard}.jpeg`
}

function higher() {
    let newCard = pickCard()
    if (newCard > storedCard) {
        alert("you win this round, new card: " + newCard + ", higher than stored card: " + storedCard + ", play again?")
    } else alert("you lose, new card: " + newCard + ", lower than stored card: " + storedCard)
    document.getElementById("newCard").src = `./IMGS/card${newCard}.jpeg`
    //location.reload()
}

