// task - 1
const buttonEl = document.querySelector('.btn');
buttonEl.addEventListener('click', () => {
    const textEl = document.querySelector('.text');
    if (buttonEl.textContent === 'Скрыть текст') {
        textEl.style.display = 'none';
        buttonEl.textContent = 'Показать текст';
    } else {
        textEl.style.display = 'block';
        buttonEl.textContent = 'Скрыть текст';
    };
});

// Task - 2
const buttonColorEl = document.querySelector('.btn-color');
buttonColorEl.addEventListener('click', () => {
    const paragraphEl = document.querySelector('.change-color');

    if (buttonColorEl.textContent === 'Сменить цвет') {
        paragraphEl.style.color = '#007bff';
        buttonColorEl.textContent = 'Цвет по умолчанию';
    } else {
        paragraphEl.style.color = 'black';
        buttonColorEl.textContent = 'Сменить цвет';
    };
});

// Task - 3
const buttonTextEl = document.querySelector('.btn-h1');
buttonTextEl.addEventListener('click', () => {
    const headingEl = document.querySelector('.change-text');

    headingEl.textContent = '«Привет, мир!»';
});

// Task - 4
const buttonAllEl = document.querySelector('.change-all-text');
buttonAllEl.addEventListener('click', () => {
    const elementText = document.querySelectorAll('.description');

    elementText.forEach(description => {
        description.textContent = '«Измененный текст»';
        description.style.color = 'red';
        description.style.backgroundColor = 'white';
        buttonAllEl.textContent = 'Сбросить текст';
    });
});

// Task - 5
const buttonAllChangeEl = document.querySelector('.change-all');
buttonAllChangeEl.addEventListener('click', () => {
    const elementTextAll = document.querySelectorAll('.descriptions');

    elementTextAll.forEach(descriptions => {
        descriptions.textContent = '«Новый текст»';
        descriptions.style.color = 'red';
        descriptions.style.backgroundColor = 'white';
        buttonAllChangeEl.textContent = 'Сбросить текст';
    });
});

// Task - 6
const btnNewTaext = document.querySelector('.new-text');
btnNewTaext.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = '«Новый абзац»';
    document.body.appendChild(newDiv);
    newDiv.style.color = 'red';
    newDiv.style.backgroundColor = 'gainsboro';
    newDiv.style.fontSize = '20px';
    newDiv.style.marginTop = '20px';
    newDiv.style.marginBottom = '50px';
    newDiv.style.width = '450px';
});

// Task - 7
const btnDelText = document.querySelector('.delete-first');
btnDelText.addEventListener('click', () => {
    const otherDescText = document.querySelector('.description_2');
    const newDescText = document.querySelector('.description_1');

    newDescText.remove();
});