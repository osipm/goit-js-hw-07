const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
const validValue = Number(inputEl.dataset.length);

console.log(validValue);

function onInputBlur(event) {
    if (event.currentTarget.value.length === validValue) {
        event.currentTarget.classList.add("valid")
    } else {event.currentTarget.classList.add("invalid")}
};

