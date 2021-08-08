const nameValue = document.querySelector('#name-output');
const textInput = document.querySelector('#name-input');

textInput.addEventListener('input', valueIput);

function valueIput(event) {
    
   nameValue.textContent = event.currentTarget.value || "незнакомец"
}

