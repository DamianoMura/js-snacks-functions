/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greet=(user)=> {
  let greetMessage="";
  let time= new Date();
  time=time.getUTCHours()+2;
  if(time<13){
    greetMessage="Buongiorno! ";
  }
  else if(time < 17){
    greetMessage="Buon pomeriggio! ";
  }
  else{
    greetMessage="Buona sera! ";
  }
  return `${greetMessage} ${user}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greet(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.