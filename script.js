
//Задание1
//let a = 10;
//alert(a);
//a = 20;
//alert(a);

//Задание2
//const dateIphone = 2006;
//console.log(dateIphone);



//Задание3
//const nameCreatorJS = "Брендан Эйх"
//console.log(nameCreatorJS);

//Задание4

//let b = 10;
//let y = 2;

//alert(b + y);
//alert(b - y);
//alert(b * y);
//alert(b / y);

//Задание5

//let result = 2 ** 5;
//alert(result);

//Задание6

//let w = 9;
//let f = 2;
//let rest = w % f;
//alert(rest);

//Задание7

//let num = 1;
//num += 5;//
//num -= 3;
//num *= 7;
//num /= 3;
//num += 1;
//num -= 1;
//alert(num);

//Задание 8

//let age = prompt('Сколько вам лет');
//alert(age);

//Задание9

//const user = {

//   name: 'Aleksey',
//   age: 20,
// isAdmin: true,
//}

//Задание10

//let userName = prompt('Твоё имя');
//alert(`Привет ${userName}!`);


//Задание №2
/*
//задание1
let password = 'пароль';
let userPass = prompt('Введите пароль');
if (userPass === password) {
    alert('Пароль введён верно');
}
else {
    alert('Пароль введён не верно');
} 

//Задание 2

//let c = 5;
//if (c > 0 && c < 10) {
//  alert('Верно');
//} else {
//  alert('Не верно');
//}

//Задание3 

let c = 150;
let d = 20
if (c >= 100 || d >= 100) {
    alert('Верно');
} else {
    alert('Не верно');
}

//задание4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание5

let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Не верно')
        break;
}

//Блок #3
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание2

for (let i = 1; i <= 5; i++) {
    console.log(i);

}

//Задание3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание4

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (const key in obj) {
    console.log(`${key} - ${obj[key]} доларов`);
}

//Задание5 
let n = 1000;
let = num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Колличество циклов: ${num}`);

//Задание6


let dayFriday = 3;
let allDay = 31;

for (let o = dayFriday; o <= allDay; o += 7) {
    console.log(`Сегодня пятница, ${o}-е число. Необходимо подготовить отчёт.`);

}

*/

//Задаине 1
/*
function min(a, b) {
    if (a < b) {
        return a;

    } else {
        return b;
    }
}
console.log(min(8, 4));
console.log(min(6, 6));

//Задание 2 

function isEven(n) {
    if (n % 2 === 0) {
        return 'Число чётное';
    } else {
        return 'Число нечётное';
    }
}
console.log(isEven(2));
console.log(isEven(3));


//Задане 3

function square(number) {
    console.log(number ** 2);
}
const up = (n) => n ** 2;
square(5);
console.log(up(5));

//Задние 4
function age() {
    let age = +prompt('Сколько тебе лет?');

    if (age < 0) {
        alert('Вы ввели неправельное значение');

    } else if (age >= 0 && age <= 12) {
        alert('Привет мой друг!');

    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}
age();

//Задание 4
function calc(b, c) {
    console.log(isNaN(b));
    console.log(isNaN(c));
    if (isNaN(b) || isNaN(c)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return b * c;
    }
}

console.log(calc('5', '4'));

//Задние 6

function getNumber() {
    let number = prompt('Введите число');
    console.log(isNaN(number));
    if (isNaN(number)) {
        return ('Заданый параметр не является числом');
    } else {
        return `${number} в кубе равняетеся ${number ** 3}`;
    }
}
console.log(getNumber());

//Задние 7
function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());


//Массивы 

//ЗАдание 1

const arr = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}
//Задание 2
const ard = [1, 5, 4, 10, 0, 3]
console.log(ard.indexOf(4));

//Задание 3
const arf = [1, 3, 5, 10, 20]
console.log(arf.join(' '));
//Задание 4 

const are = [];

for (let i = 0; i < 3; i++) {
    const are2 = [];
    for (let i = 0; i < 3; i++) {
        are2.push(1);
    }
    are.push(are2)
}

console.log(are);

//Задание 5 
const arre = [1, 1, 1];
arre.push(2, 2, 2);
console.log(arre);

//Задание 6
const arrd = [9, 8, 7, 'a', 6, 5]
arrd.sort();
console.log(arrd);
//Задание 7
const arrz = [9, 8, 7, 6, 5];

const userNumber = +prompt('Введите число');
if (arrz.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8

let str = 'abcdef';
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

//Задание 9
const arrt = [[1, 2, 3], [4, 5, 6]];
const newArrt = [];

for (let i = 0; i < arrt.length; i++) {
    newArrt.push(...arrt[i]);
}
console.log(newArrt);

//Задание 10
const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arry.length; i++) {
    if (arry[i + 1]) {
        console.log(arry[i] + arry[i + 1]
        );
    }
}

//Задание 11 

function square1(arr) {
    return arr.map(item => item ** 2);
}

console.log(square1([1, 2, 3]));

//Задние 12

function getLength(arr) {
    return arr.map(item => item.length);

}
console.log(getLength(['hi', 'world']));

//Задание 13

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}
console.log(negativeNumbers([1, 2, 3, -4, -5, -6, 7, 8, 9, 10]));

//Задание 14

function randomNumb() {
    return Math.floor(Math.random() * 10);
}

const arrw = [];

for (let i = 0; i < 10; i++) {
    arrw.push(randomNumb());
}

console.log(arrw);

const evenArr = [];

for (let i = 0; i < arrw.length; i++) {
    if (arrw[i] % 2 === 0) {
        evenArr.push(arrw[i]);
    }
}

console.log(evenArr);


//Задание 15 

function randomNumbers() {
    return Math.floor(Math.random() * 10);
}

const arro = [];

for (let i = 0; i < 3; i++) {
    arro.push(randomNumbers());
}


console.log(arro);
console.log(arro.reduce((a, b) => a + b / arro.length));  */

//Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
function filter(arr, str1) {
    const lowerStr1 = str1.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr1));

}
console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));


//Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));


//Задане 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


//Задание 5
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

//Задание 6 
function getRandomNumber1(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(getRandomNumber1(10));


//Задание 7

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(15, 18));


//Задание 8

console.log(new Date());


//Задание 9 
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

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
