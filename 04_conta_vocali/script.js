/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
//passiamo una stringa come parametro 
function findVowels(text){
  let vowels="";
  //nel caso vogliamo le vocali in un array allora
  // let vowels=[];
  for(let i=0 ; i<text.length ; i++){
    //controlliamo se il carattere è una vocale maiuscola o minuscola e la aggiungiamo alla stringa vowels aggiungendo la virgola e lo spazio alla fine
    if((text[i]=='a'||text[i]=='A')||(text[i]=='e'||text[i]=='E')||(text[i]=='i'||text[i]=='I')||(text[i]=='o'||text[i]=='O')||(text[i]=='u'||text[i]=='U'))
vowels+=text[i]+", ";
    //con l'array vowels invece:
    // vowels[vowels.length]=text[i];
  }
  return vowels;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findVowels(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)