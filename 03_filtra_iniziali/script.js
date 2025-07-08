/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
//passiamo come parametri l'array e la lettera 
const getElementByInitial=(array,letter)=>{
  //inizializzo un array vuoto che rappresenta gli elementi con l'iniziale letter
  let elements=[];
  //ciclo l'array d'ingresso
  for (i=0 ; i<array.length ; i++){
//se in array[i] al carattere 0 trovo la mia lettera trasformata in uppercase
    if(array[i].charAt(0)==letter.toUpperCase()){
      //notare elements.length può essere usato coma indice per un nuovo inserimento nell'array elements
      elements[elements.length]=array[i];
    }
  }
  //restituisco l'array elements
  return elements;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getElementByInitial(names,"a"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]