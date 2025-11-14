var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var resetButton = document.querySelector('#resetButton');
var resetScore = document.querySelector('#resetScore');
var pause = document.querySelector('#pause');
var resume = document.querySelector('#resume');
var username = prompt("Enter Your Name:");
var video1 = document.querySelector('.video1');

var current =0;
var high= 0;
var flag= false;
var timeId= null;
var timer1= 10;

function onWebsite(){
    loadData();
    displayContent();
}

function loadData(){
    var temp =localStorage.getItem ('highScore');
    if(temp != null){
        high = temp;
    }
    else{
        high = 0;
    }
}

function displayContent(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = timer1;
    
}
function startGame(){
    video1.style.display="none";
    pause.disabled=false;
    clickButton.disabled = false;
    startButton.disabled = true;
    resetButton.disabled = true;
    resetScore.disabled = true;
    startButton.style.cursor="not-allowed";
    resetButton.style.cursor="not-allowed";
    resetScore.style.cursor="not-allowed";
    clickButton.style.cursor="pointer";
    flag = true;
    timer1 = 10;
    current=0;

    statusMessage.textContent = "The Game is Started";
    timeId = setInterval(function (){
        timer1--;
        
        
        if(timer1<=0){
            endGame();
        }
        displayContent();
          
    },1000)
    clickButton.style.backgroundColor="red";  
}

function userClick(){
    if(flag){
        current++;
        displayContent();
    }
    
}

function endGame() {
    clearInterval(timeId);
    flag = true;
    clickButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
    resetScore.disabled = false;
    pause.disabled=true;
    
    if(current > high)

    {
        high = current;
        localStorage.setItem('highScore', current);
        
        statusMessage.textContent = "Congratulations 🎉" +username + " Your New High Score is : " + current;

        video1.style.display="block";
    }
    else{
        statusMessage.textContent = username + " your Current Score is : " + current;
    }
    clickButton.style.backgroundColor=" rgb(219, 219, 219)";
    
}

onWebsite();

function highreset(){

    const confirmed = confirm("Are you sure you want to reset High Score!");
    if(confirmed){
    localStorage.removeItem('highScore');
    high=0;
    highScore.textContent = high;
    statusMessage.textContent = "Your High Score is Reseted";
    }
}

function currentReset(){
    video1.style.display="none";
    currentScore.textContent = 0;
    highScore.textContent = high;
    timer.textContent = 10;
    startButton.style.cursor="pointer";
    clickButton.style.cursor="not-allowed";
    resetButton.style.cursor="pointer";
    resetScore.style.cursor="pointer";
    statusMessage.textContent = "Click Start Game to begin!";
}

function pausegame(){
    clickButton.disabled = true;
    resume.style.display="block";
    pause.style.display="none";
    clearInterval(timeId);
    clickButton.style.backgroundColor="rgb(219, 219, 219)";

}
function resumegame(){
    clickButton.disabled = false;
    resume.style.display="none";
    pause.style.display="block";
    timeId = setInterval(function (){
        timer1--;
        
        
        if(timer1<=0){
            endGame();
        }
        displayContent();
       
          
    },1000)
    clickButton.style.backgroundColor="red";
}

startButton.addEventListener('click',startGame);

clickButton.addEventListener('click' , userClick);

resetButton.addEventListener('click',highreset);

resetScore.addEventListener('click',currentReset);

pause.addEventListener('click',pausegame);

resume.addEventListener('click',resumegame);

