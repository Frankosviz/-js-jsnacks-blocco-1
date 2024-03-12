// 2. La coda dell'Array
// Cartella: array_tail
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

// Svolgimento..

// Funzione per trovare i numeri random

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Associamo tutto ad un bottone

const button = document.querySelector('.btn');

// Al click succederà che

button.addEventListener('click', function(){
    const nElement = parseInt(document.getElementById('userValue').value);
    // console.log(nElement);
    
    // Otteniamo il valore numerico che l'utente ha scelto 

    // Controlliamo se i numeri sono minori o uguali a 0 altrimenti prendiamo il numero casuale

    if (isNaN(nElement) || nElement <= 0) {
        alert("Numero rifiutato. Inserisci un numero valido");
        console.log(alert);
    
    } else { 

    // creo la costante vuota per i numeri random
       
    const nRandom = [];
    for (let i = 0; i < nElement; i++){
    nRandom.push(getRndInteger(1,100));
    console.log(nRandom);
    }

    console.log("Gli ultimi 5 elementi dell'array sono:\n" + nRandom.slice(-5));
}
})

