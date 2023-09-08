/* 
1. Salvare la value dei dati inseriti dall'utente
2. Dichiarare la variabili button
3. Salva i valori delle costanti di prezzo. ect,,,
4. Calcola il prezzo iniziale

*/

// query selector
const fullname = document.querySelector('#fullname').value;
const distance = document.querySelector('#distance').value;
const age = document.querySelector('#age');
const generate = document.querySelector('#generate-button');
// number value
const discountYoung = 40;
const discountElder = 20;
const euroKm = 0.21;
// calculator
const intialCost = distance * euroKm;
let finalCost;

generate.addEventListener('click', function(){

  console.log(fullname);
  console.log(distance);
  console.log(intialCost);

  if ( age.value === "young" ) {
    finalCost = intialCost * (1 - 40/100);
  } 
  else if ( age.value === "elder" ) {
    finalCost = intialCost * (1 - 20/100);
  }
  else {
    finalCost = intialCost;
  }

  console.log(finalCost)


});



