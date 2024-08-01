let cardOne = 10;
let cardTwo = 1;
sum = cardOne + cardTwo;
let message = "";
let cardBt = document.querySelector("#card-bt");
let cardMsg = document.querySelector("#msg-cn");
let cardSum = document.querySelector("#sum-cn");
function cardStart() {
  cardBt.textContent += cardOne + " " + cardTwo;
  cardSum.textContent += sum;
  if (sum < 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
  cardMsg.textContent = message;
}
