const DATA = [


    {
        question: "Какой цвет небо?",
        answers: [
            {
                id: '1',
                value: 'Красный',
                correct: false,
            },
            {
                id: '2',
                value: 'Синий',
                correct: true,

            },
            {
                id: '3',
                value: 'Зеленый',
                correct: false,

            },
        ]

    },
    {
        question: "Сколько дней в неделе?",
        answers: [
            {
                id: '4',
                value: 'Шесть',
                correct: false,

            },

            {
                id: '5',
                value: 'Семь',
                correct: true,

            },

            {
                id: '6',
                value: 'Восемь',
                correct: false,

            },
        ]

    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        answers: [
            {
                id: '7',
                value: 'Четыре',
                correct: false,

            },

            {
                id: '8',
                value: 'Пять',
                correct: true,

            },

            {
                id: '9',
                value: 'шесть',
                correct: false,

            },
        ]

    }

];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => ` 
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value="${answer.id}">
                    ${answer.value}
                </label>
            </li> 
        `)
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
            <div class="quiz-qwestions-item__question">${DATA[index].question}</div>
            <ul class="quiz-qwestions-item__answers">${renderAnswers()}</ul>
        </div >
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';

        } else if (answer.correct) {

            classname = 'answer--valid';
        }

        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item__question">${question.question}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
            </div>
   `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    //Логика овтета
    if (event.target.classList.contains('answer-input')) {
        console.log('input');
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;

        console.log(localResults);
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQestionIndex = (Number(questions.dataset.currentStep) + 1);

        if (DATA.length === nextQestionIndex) {
            questions.classList.add('questons--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btnNext--hidden');
            btnRestart.classList.add('btnRestart--visible');

            renderResults();
        } else {
            renderQuestions(nextQestionIndex);
        }

        btnNext.disabled = true;
    }
    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';
        questions.classList.remove('questons--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btnNext--hidden');
        btnRestart.classList.remove('btnRestart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0); 