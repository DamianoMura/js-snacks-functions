/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
//la funzione avrà in
const getInitials=(array)=>{
  //dichiaro l'array iniziali
let initials=[];
  for (let i=0; i<array.length ; i++){

initials.push(array[i].charAt(0));
  }
  //restituiamo l'array con le iniziali
return initials;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getInitials(names))//invoco direttamente la funzione nel console log in quanto mi restituisce direttamente l'array con le iniziali

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]