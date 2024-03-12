// 1. TuttiFrutti
// Cartella array-lista
// Descrizione:
// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.

// Svolgimento..

let list = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

let specialItem = 'pesca';
console.log('pesca');

list.push(specialItem);
console.log(list);

let finded = false;

for(let i = 0; i < list.length; i++){
    if (list[i] === 'cocomero'){
        finded = true;      
    } 
}

if (finded) {
    console.log('Trovato, devo solo preparare il cocktail!');
} else {
    console.log('Dobbiamo andare a fare la spesa');
}



