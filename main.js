let newCard 
let storedCard
let score = 0;

let deck = [
    [1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1], // spades, array 0,1
    [1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2, 10.2, 11.2, 12.2, 13.2], // hearts, 1,2
    [1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3], // clubs, 2,3
    [1.4, 2.4, 3.4, 4.4, 5.4, 6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4], // diamonds, 3,4
]

startButton.onclick = beginGame;
lowerButton.onclick = lower; 
higherButton.onclick = higher;

//Picks a random card. 
//Initially picks which mini from the deck array length (1 -4)
//Stores this is variable suitIndex which
function pickCard() {
    let suitIndex = Math.floor(Math.random() * deck.length);
    console.log(suitIndex) //number 1 - 4
    let suit = deck[suitIndex]; 
    console.log(suit) //makes the number/array its picked, the suit (eg.1)
    let cardIndex = Math.floor(Math.random() * suit.length);
    console.log(cardIndex)//finds random integer WITHIN the suit's length saves as cardIndex
    let card = suit[cardIndex]//saves card as above
    deck[suitIndex].splice(cardIndex, 1);//remove 'card' from the decks suit by 1
    //console.log(deck[suitIndex])
    //console.log(`You picked: ${card}`)
    document.getElementById("containerFive").innerHTML = `You have picked The ${whatCardIsIt(card)}`;
    return card;
}

//---Pair program! Woo!
//So, we have created a function whatCardIsIt. And we pass in the card variable we randomly generated earlier
function whatCardIsIt (card) {
    let cardString = card.toString()//assign a new variable cardString, the string value or card
    let cardArray = cardString.split(".")//assign a new var cardArray, cardString, split up at the decimal point
//this essentially creates an array of two numbers at array indexes [0] and [1] (before and after the decimal)
//cardPicked == this string plus the card name which is at our cardArray's index [0] (and is assigned a string value)
//in our switch statement and the suitName [1] again, assigned a value in the suitName functions switch statement!
//BOOM!   
    let cardPicked = cardName(cardArray[0]) + ' ' + suitName(cardArray[1])
    return cardPicked //returns cardPicked
    
}

function cardName(card) {
    switch(card) {
        case"1": 
        return "Ace"
        case "2": 
        return "Two"
        case "3":
        return "Three"
        case"4":
        return "Four"
        case "5":
        return "Five"
        case "6":
        return "Six"
        case"7":
        return "Seven"
        case "8":
        return "Eight"
        case "9":
        return "Nine"
        case"10":
        return "Ten"
        case"11":
        return "Jack"
        case"12":
        return "Queen"
        case "13":
        return "King"
    }
}
function suitName(card) {
    switch(card) {
        case"1": 
        return "of Spades"
        case "2": 
        return "of Hearts"
        case "3":
        return "of Clubs"
        case"4":
        return "of Diamonds"
    }
}

function beginGame() {
    newCard = pickCard(); //call pickcard function store value in newCard 
    storedCard = newCard; //makes new card become stored card
    document.getElementById("storedCard").src = `./IMGS/card${storedCard}.jpeg`
//maipulates storedcard element and updates the image with the value of stored card (images are stored as decimal nunbers (decimal for which suit))
}

//If user bets (clicks) lower button this function is called
function lower() {
   
    newCard = theBet('lower')//pass lower into theBet's param
    //theBet func also picks a new card, this is stored ^^ in newCard here

    if (newCard < storedCard) { //the bets new card is compared to previous stored card
        guessCorrect('lower')//guessCorr func gets called and passed 'lower' 
    } else {
        gameOver('higher') //gameOver function called if user is wrong, pass in param
    }
    storedCard = newCard//newCard becomes the old/stored card
}

//same as above but for if the user clicks higher
function higher() {

    newCard = theBet('higher')

    if (newCard > storedCard) {
        guessCorrect('higher')
    } else {
        gameOver('lower')
    }
    storedCard = newCard
}

//function to deal with the direction of the bet
//takes the param of 'higher' or 'lower' from higher lower functions
function theBet(bet) {
    
    moveCard()//moves the card images, so the newCard replaces the oldCard 
    document.getElementById("containerFive").innerHTML = `Bet: ${bet}.`;//Says on the page what the bet is
    newCard = pickCard()//pick a new card by calling the pickCard function
    document.getElementById("newCard").src = `./IMGS/card${newCard}.jpeg`//puts the new card thats just been picked onto the screen
    
    return newCard//returns value of newCard
}

//This function deals with the correct guess/bet
function guessCorrect(bet) { //bet is taken from the higher and lower funcs
    
    alert("YES")//a bit of positive reinforcement (from Tom, bless him)

//Writes on the page how you bet and what the cards were
    document.getElementById("containerFive").innerHTML = `You win this round, 
    new card: ${newCard}, ${bet} than stored card: ${storedCard}. Pick again?`
    
    score += 1 //updates the score by 1 and then shows this on the page
    document.getElementById("scoreNum").innerHTML = `Score: ${score}`
    checkScore()//if 5 is hit, alerts winner
}

//This function replaces the old card with the new card
//Kind of need Tom to explain this as dont quite get it 
function moveCard() { 
    if (document.getElementById("newCard").src != document.getElementById("card").src) {
        document.getElementById("storedCard").src = document.getElementById("newCard").src
    }
}

//Checks the score, if its equal to 5 - boom, winner!
//<-----would be good to add a wait 3 seconds then reload page func here or something ---->
function checkScore() {
    if (score == 5) {
        alert("Winner")
    }
}

function gameOver(poop) { //'lower' here, needs to change depending on way they bet
    userInput = prompt(`Game over! You lose. New card: ${newCard} ${poop} 
    than stored card: ${storedCard}. Play again? \n1. Yes \n2. No`)
    if (userInput == 1) {
        location.reload()
    } else {
        alert("Bye")
        location.reload()
    }
}