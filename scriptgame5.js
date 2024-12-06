function startRockPaperScissors() {
    const options = [`камень`, `ножницы`, `бумага`];
    let computer = Math.floor(Math.random() * options.length);
    let computerResult = options[computer];
    let userAnswer = Number(prompt(`Как обыграем компьютер?\nНапишите номер ответа:\n1.Камень\n2.Ножницы\n3.Бумага`) - 1);
    let userResult = options[userAnswer];
    // console.log(computerResult);
    // console.log(userResult);
    const rules = {
        камень: "ножницы",
        ножницы: "бумага",
        бумага: "камень",
    };

    if (computerResult === userResult) {
        alert(`Ничья, побуем еще!`)
        return startRockPaperScissors()
    } else if (rules[userResult] === computerResult) {
        alert(`Вы выиграги!!!\nВаш выбор - ${userResult}\nКомпьтер выбрал - ${computerResult}`)
    } else {
        alert(`Вы проиграли...\nВаш выбор - ${userResult}\nКомпьтер выбрал - ${computerResult}`)
    }
};

