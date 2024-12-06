function igra() {
    let userValue = Number(prompt("Введите число от 1 до 3. 1 - камень, 2 - ножницы, 3 - бумага"))
    let progValue = Math.ceil(Math.random() * 3)
    alert(`Компьютер загадал ${progValue}`)
    if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
        alert("Молодец! Ты выйграл!")
    }
    else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
        alert("Извини, ты проиграл")
    } else {
        alert("Ничья")
    }
}