
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
