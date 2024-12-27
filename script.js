let str = 'js';
str = str.toUpperCase();
console.log(str);

function filter(arr, str1) {
    const lowerStr1 = str1.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr1));

}
console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));



let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));



console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());


function getRandomNumber1(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(getRandomNumber1(10));




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(15, 18));



console.log(new Date());

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);



function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятнца", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOFWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOFWeek}.
    Время: ${hours} ${minutes} ${seconds} `;
}

console.log(formatDate(new Date()));



const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


function filter(array, ruleFunction) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

function isPositive(num) {
    return num > 0;
};

function isMale(person) {
    return person.gender === `male`;
};

console.log(filter([3, -4, 1, 9], isPositive));

const peopleTwo = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleTwo, isMale));


const timer = () => {
    const id = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(id);
        console.log(`30 секунд прошло!`);
    }, 30000);
};
console.log(timer());



function delayForSecond(callback) {
    setTimeout(callback, 1000);
};

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


function forSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

forSecond(() => sayHi('Глеб'));
