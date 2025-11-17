const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

// Required variable
var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;


function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    var temp = localStorage.getItem('highScoreGame');
    if (temp != null) {
        bestScore = temp;
    }

    else {
        bestScore = 0;
    }

};

function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
};

webLoad();

function randomTimeGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomIndex() {
    var index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function popImageGame() {

    var randomTime = randomTimeGenerator(500, 1500);
    var hole = randomIndex();
    var mole = hole.querySelector('.mole');
    if (playGame) {
        mole.classList.add('up');
        setTimeout(function () {
            mole.classList.remove('up');
            popImageGame();
        }, randomTime);
    }
}

function endGame() {
    clearInterval(gameId);
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScoreGame', bestScore);
        alert(`you score is higher than the previous one: ${score}`);
    }

    else {
        alert(`you score is: ${score}`);
    }
    score = 0;
    displayContent();
    startBtn.disabled = false;
}


function startGame() {

    score = 0;
    time = 30;
    startBtn.disabled = true;

    playGame = true;

    popImageGame();

    gameId = setInterval(function () {
        time--;
        displayContent();

        if (time == 0) {
            playGame = false;
            clearInterval(gameId);
            endGame();
        }


    }, 1000);
}

function bonk(event) {

    if (playGame == false) return;

    if (event.target.classList.contains('up')) {
        score++;
        event.target.classList.remove('up');
        event.target.classList.add('bonked');
    }
    setTimeout(function () {
        event.target.classList.remove('bonked');

    }, 300);
    displayContent();
}

function resetGame() {
    localStorage.clear();
    bestScore = 0;
    displayContent();
}

function pauseGame() {
    if (!playGame) return;

    playGame = false;
    clearInterval(gameId);

    // hide any currently visible moles and "disable" interaction
    moles.forEach(m => {
        m.classList.remove('up');
        m.style.pointerEvents = 'none';
    });
    holes.forEach(h => (h.style.pointerEvents = 'none'));

    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeGame() {
    if (playGame) return;      // already running
    if (time <= 0) return;     // game over; nothing to resume

    playGame = true;

    // re-enable interaction
    moles.forEach(m => (m.style.pointerEvents = 'auto'));
    holes.forEach(h => (h.style.pointerEvents = 'auto'));

    // show/hide the correct buttons
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";

    // resume mole popping
    popImageGame();

    // resume countdown from remaining time
    gameId = setInterval(function () {
        time--;
        displayContent();

        if (time === 0) {
            playGame = false;
            clearInterval(gameId);
            endGame();
        }
    }, 1000);
}

// add this once:
resumeBtn.addEventListener('click', resumeGame);


pauseBtn.addEventListener('click', pauseGame);

resetBtn.addEventListener('click', resetGame);
startBtn.addEventListener('click', startGame);

moles.forEach((box) => {
    box.addEventListener('click', bonk);
});