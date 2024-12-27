function randomNumber() {
    return Math.floor(Math.random() * 30);
};

function randomIndex() {
    return Math.floor(Math.random() * 4);
};

let firstNumber = randomNumber();
let secondNumber = randomNumber();
let i = randomIndex();

let operationSum = (firstNumber) + (secondNumber);
let operationSub = (firstNumber) - (secondNumber);
let operationMult = (firstNumber) * (secondNumber);
let operationDiv = (firstNumber) / (secondNumber);

const mathSign = [`+`, `-`, `*`, `/`];
const mathOperations = [operationSum, operationSub, operationMult, operationDiv];

function randomTasks() {

    let task = Number(prompt(`Чему равно выражение: ${firstNumber} ${mathSign[i]} ${secondNumber}?`));

    if (task === mathOperations[i]) {
        alert(`Молодец, ${task} ты ответил правильно!`);
    } else {
        alert(`Увы, ${task} ты овтетили не правильно. Правильный овтет ${mathOperations[i]} `);
    }

};