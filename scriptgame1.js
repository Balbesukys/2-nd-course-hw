let secretNumber = Math.floor(Math.random() * 100) + 1;

let currentGuess = 0

const maxGuess = 10

function checkGuess() {
    let guess = parseInt(document.getElementById('input-field').value);
    currentGuess++;

    if (guess == secretNumber) {
        alert("Поздравляем вы угадали число" + currentGuess + 'попыток')
        document.getElementById('input-field').disabled = true
        document.getElementById('message').textContent = ''

    } else if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Ваше число меньше загаданного'

    } else {
        document.getElementById('message').textContent = 'Ваше число больше загаданного'
    }

    if (currentGuess >= maxGuess && guess != secretNumber) {
        alert('К сожалению вы не угадали');
    }
}
function ResetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    currentGuess = 0;
    document.getElementById('input-field').value = ''
    document.getElementById('input-field').disable = false
    document.getElementById('message').textContent = ''
}