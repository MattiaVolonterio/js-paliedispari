const userInput = document.getElementById("user-word");
const verifyButton = document.getElementById("verify-button");
const result = document.getElementById("result");

verifyButton.addEventListener("click", function () {
  let userWord = userInput.value;
  let resultValue = isPalindrome(userWord);

  if (resultValue) {
    result.innerText = "Si";
  } else {
    result.innerText = "No";
  }
});
