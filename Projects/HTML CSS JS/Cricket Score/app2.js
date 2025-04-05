
const selection2 = document.querySelector('#selection2');
const Score2 = document.querySelector('#Score2');
const run2 = document.querySelectorAll('#run2');
const Wicket2 = document.querySelector('#wicket2');
const isFinished2 = document.querySelector('#isFinished2');

let Balls2 = 0;
let Overs2 = 0;
let Runs2 = 0;
let Wickets2 = 0;

function addRuns2() {
    const r = parseInt(this.value);
    Runs2 += r;
    updateScore2();
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
    for (let r of run2) {
        r.disabled = true;
    }
    Wicket2.disabled = true;
    isFinished2.innerHTML = `Innings Finished with ${Runs2} Runs and ${Wickets2} Wickets in ${Overs2}.${Balls2} Overs`
}

function updateOvers2() {
    Balls2 += 1;
    if (Balls2 === 6) {
        Overs2 += 1;
        Balls2 = 0
    }
}

function reset2() {
    for (let r of run2) {
        r.disabled = false;
    }
    Wicket2.disabled = false;
    Overs2 = 0;
    Balls2 = 0;
    Runs2 = 0;
    Wickets2 = 0;
    selection2.innerHTML = 'Choose Teams for Batting and Bowling';
    Score2.innerHTML = '';
    isFinished2.innerHTML = 'Match Is Yet To Start'
}


// ok.addEventListener('click', function (e) {
//     e.preventDefault();
//     let Ba = battingTeam.value;
//     let Bo = bowlingTeam.value;
//     if (Ba && Bo) {
//         selection.innerHTML = `${Ba} is Batting----------------${Bo} is Bowling`;
//         battingTeam.value = '';
//         bowlingTeam.value = '';
//         if (Runs > 0 || Wickets > 0) {
//             reset()
//         }
//     }
// })

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

res.addEventListener('click', function () {
    reset()
})