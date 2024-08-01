let cardOne = 10;
let cardTwo = 1;
sum = cardOne + cardTwo;
let message = ""; //created message with empty string
let cardBt = document.querySelector("#card-bt"); //Asked for a html element by its id.
let cardMsg = document.querySelector("#msg-cn"); //Asked for a html element by its id.
let cardSum = document.querySelector("#sum-cn"); //Asked for a html element by its id.
function cardStart() {
  cardBt.textContent += cardOne + " " + cardTwo; //added cardOne & cardTwo values infront of the  card.
  cardSum.textContent += sum; //added sum value infront of  the  sum.
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
  cardMsg.textContent = message; //by using this we are displaying the message of the true condition.
}
