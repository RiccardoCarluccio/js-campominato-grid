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
  //TEST
  console.log(`Select passed value is: ${CELLS_NUMBER}`);
})