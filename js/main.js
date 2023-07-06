/*
Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri
e calcoli la somma di tutti questi numeri contenuti nell'array,
restituendolo come risultato.

Utilizzare la funzione sommaNumeri per stampare il risultato.


L'array di N numeri da passare alla funzione lo create chiedendo all'utente
quanti numeri vuole inserire (cioè N), e poi facendogli inserire questi
N numeri all'utente stesso tramite apposito prompt().
*/


/*
let utenteNumeriInArray = parseInt(
  prompt("Quanti numeri vuoi nel tuo array?: ")
);
let numeriInArray = [];

for (i = 0; i < utenteNumeriInArray; i++) {
  let numeriutente = parseInt(prompt(`dammi x numeri: `));
  numeriInArray.push(numeriutente);
}

let numeriSommati = sommaNumeri(numeriInArray);

function sommaNumeri(numeriArray) {
  let contatore = 0;
  for (let i = 0; i < numeriArray.length; i++) {
    contatore += numeriArray[i];
  }
  console.log(`${contatore}`);
}
*/



let utenteNumeriInArray = parseInt(
    prompt("Quanti numeri vuoi nel tuo array?: ")
  );
  let numeriInArray = [];
  
  for (i = 0; i < utenteNumeriInArray; i++) {
    let numeriutente = parseInt(prompt(`dammi x numeri: `));
    numeriInArray.push(numeriutente);
  }
  
  let numeriSommati = sommaNumeri(numeriInArray);
  
  function sommaNumeri(numeriArray) {
    let contatore = 0;
    for (let i = 0; i < numeriArray.length; i++) {
      contatore += numeriArray[i];
    }
    console.log(`${contatore}`);
  }
  