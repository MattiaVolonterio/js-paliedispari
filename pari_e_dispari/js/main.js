const userSelectInput = document.getElementById("user-select");
const userNumberInput = document.getElementById("user-select-number");
const computerResult = document.getElementById("computer-number");
const sumResult = document.getElementById("sum-result");
const winner = document.getElementById("winner");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
  userSelection = userSelectInput.value;
  userNumber = parseInt(userNumberInput.value);

  let computerNumber = generateRandomNumber(1, 5);
  computerResult.innerText = computerNumber;

  let sum = userNumber + computerNumber;
  sumResult.innerText = sum;

  let isEvenNumber = isEven(sum);

  if (
    (userSelection == "even" && isEvenNumber) ||
    (userSelection == "odd" && !isEvenNumber)
  ) {
    winner.innerText = "Utente";
  } else {
    winner.innerText = "Computer";
  }
});
