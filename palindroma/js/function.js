/**
 *
 * @param {string} word La parola su cui effettuare la verifica
 * @returns Restituisce true se palindroma e false se non lo è
 */
function isPalindrome(word) {
  if (typeof word == "string" && word != "") {
    let wordLowered = word.toLowerCase();
    let wordLenght = wordLowered.length - 1;
    let wordReversed = "";

    while (wordLenght >= 0) {
      wordReversed += wordLowered[wordLenght];
      wordLenght--;
    }

    if (wordLowered == wordReversed) {
      return true;
    } else {
      return false;
    }
  } else {
    alert("La parola inserita non è corretta");
    location.reload();
  }
}
