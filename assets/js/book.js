const dateInput = document.querySelector('#event-date');
const guestsNumber = document.querySelector('#guestsNumber');

dateInput.addEventListener("change", function() {
    console.log(dateInput.value);
    if(dateInput.value > new Date().toISOString().split('T')[0]) {
        dateInput.style.border = '1px solid #ccc';
    } else {
        dateInput.style.border = '1px solid red';
    }
});

guestsNumber.addEventListener("input", function() {
    if(guestsNumber.value > 0) {
        guestsNumber.style.border = '1px solid #ccc';
    } else {
        guestsNumber.style.border = '1px solid red';
    }
});