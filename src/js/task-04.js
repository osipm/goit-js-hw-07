const valueCounter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onClickDecrement);
incrementBtn.addEventListener('click', onClickIncrement);

function onClickDecrement() {
    valueCounter.textContent -= 1;
}

function onClickIncrement() {
    valueCounter.textContent = Number(valueCounter.textContent) + 1;
}