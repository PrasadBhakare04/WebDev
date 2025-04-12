const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1AddScore = document.querySelector('#p1AddScore');
const p2AddScore = document.querySelector('#p2AddScore');
const reset = document.querySelector('#reset');
const playTill = document.querySelector('#playTill');

let score1 = 0;
let score2 = 0;
let winningScore = 3;
let isGameOver = false;

playTill.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    funcReset()
})

p1AddScore.addEventListener('click', function () {
    if (!isGameOver) {
        score1 += 1;
        if (score1 === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1AddScore.disabled = true;
            p2AddScore.disabled = true
        }
        p1Display.innerText = score1
    }
})
p2AddScore.addEventListener('click', function () {
    if (!isGameOver) {
        score2 += 1;
        if (score2 === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1AddScore.disabled = true;
            p2AddScore.disabled = true
        }
        p2Display.innerText = score2
    }
})

reset.addEventListener('click', funcReset);
function funcReset() {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1AddScore.disabled = false;
    p2AddScore.disabled = false
}
