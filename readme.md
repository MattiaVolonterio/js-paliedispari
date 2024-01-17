## js-paliedispari

# CONSEGNA

```
@qui
Ciao ragazzi,
Esercizio di oggi: Paliedispari

Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Buon lavoro e buon divertimento!
```

# SVOLGIMENTO

## PALINDROMA

1. Tramite un prompt chiedo all'utente di inserire una parola
2. Verifico che la parola inserita sia valida(dev'essere una stringa)
3. - SE la parola è valida:
     - **CONTROLLO CHE LA PAROLA SIA PALINDROMA**
   - ALTRIMENTI chiedo all'utente di inserire una nuova parola

**CONTROLLO CHE LA PAROLA SIA PALINDROMA**

- Creo una variabile dove salvare la parola scritta al contario (parolaInvertita)
- Definisco una variabile i a cui assegno il valore della lunghezza della parola inserita - 1
- FINCHE i >= 0:
  - Assegno alla variabile parolaInvertita il valore di i
- SE la parola inserita dall'utente è uguale alla parolaInvertita:
  - la parola inserita è palindroma
- ALTRIMNENTI
  - la parola inserita non è palindroma

## PARI E DISPARI

1. Chiedo all'utente di scegliere tra pari e dispari e salvo in una variabile la scelta
2. Chiedo all'utente di scegliere un numero da 1 a 5 e salvo la scelta in una variabile
3. **GENERO UN NUMERO RANDOM TRA 1 e 5** per il computer
4. Sommo i due numeri e salvo il valore
5. **VERIFICO SE LA SOMMA SALVATA E' PARI O DISPARI**
6. - SE utente ha scelto pari e somma è pari OPPURE utente ha scelto dispari e somma è dispari:
     - stampo ha vinto l'utente
   - ALTRIMENTI
     - stampo ha vinto il computer

**VERIFICO SE LA SOMMA SALVATA E' PARI O DISPARI**

- Passo un numero alla funzione
- SE numero % 2 == 0
  - il numero è pari
- ALTRIMENTI
  - il numero è dispari
