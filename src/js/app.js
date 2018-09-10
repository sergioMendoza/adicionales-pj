/* eslint linebreak-style: ["error", "windows"] */
/** **********************************DOM******************************************** */

const incrementTotal = (idNumberBox) => {
  let number = document.querySelector(`#${idNumberBox}`).textContent;
  number = parseInt(number, 10) + 1; // valor del número central
  document.querySelector(`#${idNumberBox}`).innerText = number;
};

const decrementTotal = (idNumberBox) => {
  let numberCountPizza = document.querySelector(`#${idNumberBox}`).textContent;
  numberCountPizza = parseInt(numberCountPizza, 10) - 1;
  if (numberCountPizza >= 0) {
    document.querySelector(`#${idNumberBox}`).innerText = numberCountPizza;
  }
};
const activeButtonIncrement = (element, idNumber) => {
  const number = element.parentElement.previousElementSibling;
  const btnDecrement = number.previousElementSibling.children[0].id;
  const btnIncrement = element.id;
  if (document.querySelector(`#${idNumber}`).textContent > 0) {
    document.querySelector(`#${btnDecrement}`).classList.add('btn-active');
    document.querySelector(`#${btnIncrement}`).classList.add('btn-active');
  }
};

const desactiveButtonIncrement = (element, idNumber) => {
  const number = element.parentElement.nextElementSibling;
  const btnIncrement = number.nextElementSibling.children[0].id;
  const btnDecrement = element.id;
  if (document.querySelector(`#${idNumber}`).textContent === '0') {
    document.querySelector(`#${btnIncrement}`).classList.remove('btn-active');
    document.querySelector(`#${btnDecrement}`).classList.remove('btn-active');
  }
};


// Execute

// Events

document.addEventListener('click', (event) => {
  const arrayELements = event.path;
  for (let i = 0; i < arrayELements.length; i += 1) {
    if (arrayELements[i].localName === 'button') {
      if (arrayELements[i].classList[0] === 'increment') {
        const idNumber = arrayELements[i].parentElement.previousElementSibling.id;
        incrementTotal(idNumber);
        activeButtonIncrement(arrayELements[i], idNumber);
      }
      if (arrayELements[i].classList[0] === 'decrement') {
        const idNumber = arrayELements[i].parentElement.nextElementSibling.id;
        decrementTotal(idNumber);
        desactiveButtonIncrement(arrayELements[i], idNumber);
      }
    }
  }
});
