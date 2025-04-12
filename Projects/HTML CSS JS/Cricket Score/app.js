const battingTeam = document.querySelector('#battingTeam');
const bowlingTeam = document.querySelector('#bowlingTeam');
const ok = document.querySelector('#ok');
const res = document.querySelector('#res');
const selection = document.querySelector('#selection');
const Score = document.querySelector('#Score');
const run = document.querySelectorAll('#run');
const Wicket = document.querySelector('#wicket');
const isFinished = document.querySelector('#isFinished');
const change = document.querySelector('#change');


let Balls = 0;
let Overs = 0;
let Runs = 0;
let Wickets = 0;
let Balls2 = 0;
let Overs2 = 0;
let Runs2 = 0;
let Wickets2 = 0;
let arr = [];


const selection2 = document.querySelector('#selection2');
const Score2 = document.querySelector('#Score2');
const run2 = document.querySelectorAll('#run2');
const Wicket2 = document.querySelector('#wicket2');
const isFinished2 = document.querySelector('#isFinished2');

function disableButtons() {
    for (let r of run) {
        r.disabled = true;
    }
    Wicket.disabled = true;
}

function disableButtons1() {
    for (let r of run2) {
        r.disabled = true;
    }
    Wicket2.disabled = true;
}

function enableButtons() {
    for (let r of run) {
        r.disabled = false;
    }
    Wicket.disabled = false;
}

function enableButtons1() {
    for (let r of run2) {
        r.disabled = false;
    }
    Wicket2.disabled = false;
}

function addRuns() {
    const r = parseInt(this.value);
    Runs += r;
    updateScore();
}

function updateScore() {
    Score.innerHTML = `${Runs} Runs and ${Wickets} Wickets`;
    updateOvers();
    isFinished.innerHTML = `${Overs}.${Balls} Overs`;
    if (Overs === 3.0) {
        finish()
    }
}

function finish() {
    disableButtons();
    isFinished.innerHTML = `Innings Finished with ${Runs} Runs and ${Wickets} Wickets in ${Overs}.${Balls} Overs`
}

function updateOvers() {
    Balls += 1;
    if (Balls === 6) {
        Overs += 1;
        Balls = 0
    }
}

function reset2() {
    disableButtons1();
    Overs2 = 0;
    Balls2 = 0;
    Runs2 = 0;
    Wickets2 = 0;
    selection2.innerHTML = 'Second Inning is yet to start';
    Score2.innerHTML = '';

}

function reset() {
    disableButtons();
    disableButtons1();
    change.disabled = true;
    Overs = 0;
    Balls = 0;
    Runs = 0;
    Wickets = 0;
    selection.innerHTML = 'Choose Teams for Batting and Bowling';
    Score.innerHTML = '';
    isFinished.innerHTML = 'Match Is Yet To Start';
    reset2();
}

disableButtons();
disableButtons1();
change.disabled = true;
let Ba = '';
let Bo = '';
ok.addEventListener('click', function (e) {
    e.preventDefault();
    Ba = battingTeam.value;
    Bo = bowlingTeam.value;
    isFinished.innerHTML = 'Match will start soon';
    selection2.innerHTML = 'Second Inning is yet to start';
    enableButtons();
    change.disabled = false;
    if (Ba && Bo) {
        selection.innerHTML = `${Ba} is Batting----------------${Bo} is Bowling`;
        battingTeam.value = '';
        bowlingTeam.value = '';
        if (Runs > 0 || Wickets > 0) {
            reset()
        }
    }
})

run[0].addEventListener('click', addRuns);
run[1].addEventListener('click', addRuns);
run[2].addEventListener('click', addRuns);
run[3].addEventListener('click', addRuns);
run[4].addEventListener('click', addRuns);

Wicket.addEventListener('click', function () {
    if (Wickets < 10) {
        Wickets += 1;
        updateScore()
    }
    if (Wickets >= 10) {
        finish();
        return;
    }
});

res.addEventListener('click', function () {
    reset();
    reset2()
})

///////////////////////////////////////////////////////////////////////////////////

change.addEventListener('click', function () {
    enableButtons1();
    selection2.innerHTML = `${Bo} is Batting----------------${Ba} is Bowling`;
})

function addRuns2() {
    const r = parseInt(this.value);
    Runs2 += r;
    updateScore2();
    if (Runs2 === Runs || Runs2 > Runs) {
        let = Wickets - Wickets2;
        alert(`${Bo} won by ${winBy} Wickets`)
        finish2();
    }

}

function updateScore2() {
    Score2.innerHTML = `${Runs2} Runs and ${Wickets2} Wickets`;
    updateOvers2();
    isFinished2.innerHTML = `${Overs2}.${Balls2} Overs`;
    if (Overs2 === 3.0) {
        finish2()
    }
}

function finish2() {
    disableButtons1();
    isFinished2.innerHTML = `Innings Finished with ${Runs2} Runs and ${Wickets2} Wickets in ${Overs2}.${Balls2} Overs`
}

function updateOvers2() {
    Balls2 += 1;
    if (Balls2 === 6) {
        Overs2 += 1;
        Balls2 = 0
    }
}


run2[0].addEventListener('click', addRuns2);
run2[1].addEventListener('click', addRuns2);
run2[2].addEventListener('click', addRuns2);
run2[3].addEventListener('click', addRuns2);
run2[4].addEventListener('click', addRuns2);

Wicket2.addEventListener('click', function () {
    if (Wickets2 < 10) {
        Wickets2 += 1;
        updateScore2()
    }
    if (Wickets2 >= 10) {
        finish2();
        return;
    }
});
