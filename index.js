let cardOne = 10;
let cardTwo = 1;
sum = cardOne + cardTwo;

let cards = [cardOne, cardTwo];
//created an array as cards and put the values of the card in one array.

let message = "";
//created message with empty string

let cardBt = document.querySelector("#card-bt");
//Asked for a html element by its id selector.

let cardMsg = document.querySelector("#msg-cn");
//Asked for a html element by its id selector.

let cardSum = document.querySelector("#sum-cn");
//Asked for a html element by its id selector.

function gameStart() {
  //added this function for calling renderStart() function
  renderStart();
}

function renderStart() {
  //changed name from cardStart to renderStart because it render the conditon inside the function.
  cardBt.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardBt.textContent += cards[i] + " ";
    //added some concepts using for loop , array, dom to put values infront of the  card.
  }

  cardSum.textContent = "Sum: " + sum;
  //added sum value infront of  the  sum.

  if (sum < 20) {
    //it will check if the sum is less than 21 if  it is true, then it will give the message as output.
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    //it will check if the sum is perfect 21 if it is true,  then  it will give the message as output. '===' we have used this because it checks strictly that 21 is equal to or not.
    message = "You've got Blackjack!";
  } else {
    //if above both condtion is false then it will print the message of the else .
    message = "You're out of the game!";
  }
  cardMsg.textContent = message;
  //by using this we are displaying the message of the true condition.
}

function newCard() {
  //  added this function to add new card value inside the sum variable onclick of new card
  let cardThree = 5;
  sum += cardThree;
  cards.push(cardThree);
  // put cardThree value inside the cards array.
  console.log(cards);
  renderStart();
  // call this card to re-run the code of this function
}
