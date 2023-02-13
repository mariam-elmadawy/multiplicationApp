const scoreEL = document.querySelector('.score');
const submit = document.querySelector('.submit');
const input = document.querySelector('input');
const question = document.querySelector('.question')
const form = document.querySelector('form');

// Returns a random integer from 0 to 9:
let numb1 = Math.floor(Math.random() * 10);
let numb2 = Math.floor(Math.random() * 10);

question.innerText = ` What is ${numb1} multiply ${numb2}?`

let answer = numb1 * numb2;

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0
}
scoreEL.innerText = `${score}`
form.addEventListener('submit', () => {
    let userInput = Number(input.value);
    if (userInput === answer) {
        score++;
        updateScore()
    } else {
        score--;
        updateScore()
    }

});

function updateScore() {
    localStorage.setItem('score', JSON.stringify(score))
}