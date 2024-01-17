/**
 *
 * @param {string} word La parola su cui effettuare la verifica
 * @returns Restituisce un console.log se la parola inserita è palindroma o no
 */
function isPalindrome(word) {
  if (typeof word == "string") {
    let wordLowered = word.toLowerCase();
    let wordLenght = wordLowered.length - 1;
    let wordReversed = "";

    while (wordLenght >= 0) {
      wordReversed += wordLowered[wordLenght];
      wordLenght--;
    }

    if (wordLowered == wordReversed) {
      return console.log("La parola inserita è palindroma");
    } else {
      return console.log("La parola inserita non è palindroma");
    }
  } else {
    alert("La parola inserita non è corretta");
  }
}
