const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');

const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
var username = document.querySelector('#userName');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
const live1 = document.querySelector('#live1');
const live2 = document.querySelector('#live2');
const live3 = document.querySelector('#live3');
var Name =prompt("Enter your name:");


username.textContent=Name;
let colors = [];
let pickCorrectColor = "";
let currentStreak = 0;
let bestStreak = 0;
let num = 6;
var count1 = 1;


document.addEventListener("DOMContentLoaded", () => {
    loadBestStreak();
    startNewRound();
});


function loadBestStreak() {
    const stored = localStorage.getItem("highBestStreak");
    bestStreak = stored ? parseInt(stored) : 0;
    displayStreaks();
}


function displayStreaks() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}


function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(count) {
    return Array.from({ length: count }, () => randomRGB());
}


function startNewRound() {
    // messageDisplay.textContent = "Choose the correct color🎨";

    restorelives();
    colors = generateColors(num);
    pickCorrectColor = colors[Math.floor(Math.random() * colors.length)];

    colorDisplay.textContent = pickCorrectColor;

    colorBoxes.forEach((box, index) => {
        if (colors[index]) {
            box.style.display = "block";               // show box
            box.style.backgroundColor = colors[index]; // apply color
            box.style.pointerEvents = "auto";          // enable click

        } else {
            box.style.display = "none";                // hide extra boxes in easy mode

        }
    });

}


// ✅ Handle Guess
function handleGuess(e) {
    const clickedColor = e.target.style.backgroundColor;

    if (clickedColor === pickCorrectColor) {
        messageDisplay.textContent = "✅ Correct!";
        currentStreak++;

        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem("highBestStreak", bestStreak);
        }
        startNewRound();

        displayStreaks();

       

    } else {
        messageDisplay.textContent = "❌ Try Again";


        console.log(count1);
        livesStatus();
    }
}
function restorelives() {
    count1 = 1;
    live1.style.display = "block";
    live2.style.display = "block";
    live3.style.display = "block";
}
function plusOne() {
    if (count1 === 2) {
        live2.style.display = "block";
        count1++;
    }
    else if (count1 === 3) {
        live3.style.display = "block";
        count1++;
    }
}

function livesStatus() {
    if (count1 === 1) {
        live1.style.display = "none";
    } else if (count1 === 2) {
        live2.style.display = "none";
    } else if (count1 === 3) {
        live3.style.display = "none";
        messageDisplay.textContent = "❌ You Lost";
        disableColorClicks()
    }

    count1++; // ✅ Increment AFTER checking
}

function disableColorClicks() {
    colorBoxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
}


colorBoxes.forEach(box => {
    box.addEventListener("click", handleGuess);

});


newRoundBtn.addEventListener("click", () => {
    currentStreak = 0;
    displayStreaks();
    startNewRound();
});


resetStreakBtn.addEventListener("click", () => {
    bestStreak = 0;
    localStorage.removeItem("highBestStreak");
    displayStreaks();
});


easyBtn.addEventListener("click", () => {
    num = 3;
    currentStreak = 0;
    displayStreaks();
    startNewRound();
});

hardBtn.addEventListener("click", () => {
    num = 6;
    currentStreak = 0;
    displayStreaks();
    startNewRound();
});
