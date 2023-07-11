const DIFFICULTY_SELECTION = document.querySelector("[name='difficulty-selection']");
const BTN_INPUT = document.querySelector("#btn-input");

BTN_INPUT.addEventListener('click', function getData() {
  const USER_CHOICE = DIFFICULTY_SELECTION.value;

  //TEST SELECT
  if (USER_CHOICE === '1') {
    console.log('Difficulty selected: 1');
  } else if (USER_CHOICE === '2') {
    console.log('Difficulty selected: 2');
  } else {
    console.log('Difficulty selected: 3');
  }

  const CELLS_NUMBER = parseInt(DIFFICULTY_SELECTION.value);
  //TEST NUMEBR OF CELLS
  console.log(`The number of cells is: ${CELLS_NUMBER}`);
})

//Per fare questo esercizio mi è stato d'obbligo riguardare la lezione registrata e,
//cercando di capire ogni passaggio, copiarlo. Per questo l'uguaglianza con l'esercizio
//fatto da Florian. Spero di capirlo sufficientemente

function createSingleSquare(squareContent) {  //capire il paramentro. aspettiamo il richiamo della funzione
  const square = document.createElement('div');

  square.classList.add('grid-square');
  square.textContent = (squareContent);

  return square;  //cioè ritorna un div?
}