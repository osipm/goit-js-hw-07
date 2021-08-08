const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

inputEl.value = Number.parseInt(window.getComputedStyle(textSpan).fontSize);

function onInputChange({currentTarget}) {
    textSpan.style.fontSize = `${currentTarget.value}px`;
}

