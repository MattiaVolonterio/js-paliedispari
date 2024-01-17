/**
 *
 * @param {number} min il numero minore tra cui generare un numero random
 * @param {number} max il numero maggiore tra cui generare un numero random
 * @returns un numero random compreso tra min e max
 */
function generateRandomNumber(min, max) {
  if (min <= max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  } else {
    console.error("Il numero massimo non può più piccolo del minimo");
  }
}

/**
 *
 * @param {number} number numero da verificare se è pari o dispari
 * @returns se il numero è divisibile per 2 con resto zero restituisce TRUE(numero pari) altrimenti restituisce FALSE(numero dispari)
 */
function isEven(number) {
  if (isNaN(number)) {
    alert("Il valore in ingresso non è valido");
    location.reload();
  } else {
    if (number % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
