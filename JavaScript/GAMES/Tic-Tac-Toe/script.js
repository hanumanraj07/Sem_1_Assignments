const boxes = document.querySelectorAll('.box');
const result =document.querySelector('.result');
const reset = document.querySelector('.reset');

const saveLocal = document.getElementById("slocal");
const retrieveLocal = document.getElementById("rlocal");
const saveSession = document.getElementById("sSession");
const retrieveSession = document.getElementById("rSession");
const lwinner = document.getElementById("lwinner");
const outputParagraph = document.getElementById("output");
const outputParagraph2 = document.getElementById("output2");
var lastWinner = document.getElementById("lastWinner");


var player1 =prompt("Player1 Enter your Name:");
 
var player2 =prompt("Player2 Enter your Name:");
 

let player=true;

const winner=[
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkwinner(){
for (let data of winner){
    const  [a, b, c]= data;
    const B1 = boxes[a].innerHTML;
    const B2 = boxes[b].innerHTML;
    const B3 = boxes[c].innerHTML;
    
    if (B1 != "" && B2 != "" && B3 != ""){
        if (B1===B2 && B2===B3){
           if (B1==="O"){
            let winnerName = player1;
            result.innerHTML="🎉Congratulations " + player1 + " You won the Game🎉";


         } else {
          let winnerName = player2
        result.innerHTML ="🎉Congratulations " + player2 + " You won the Game🎉";
    }
    localStorage.setItem("lastWinner",winnerName);
        for(let box of boxes){
        box.disabled = true;
        }
        return;
      }
    }
  }
}

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(player){
            box.innerHTML="O";
            player=false;
        }
        else{
            box.innerHTML="X";
            player=true;
        }
            box.disabled=true;
            checkwinner();
        
    } ) 
})
  reset.addEventListener("click", restart);
function restart () {
 
    boxes.forEach((box)=> {
        box.innerHTML="";
       box.disabled=false;
  });
  
    result.innerHTML="";
    outputParagraph.innerHTML="";
    outputParagraph2.innerHTML="";
    player=true;
 
}

saveLocal.addEventListener("click", function() {
  localStorage.setItem("Player_1", player1);
  localStorage.setItem("Player_2", player2);
  outputParagraph.textContent = "Player_1 saved to Local Storage:" + player1;
  outputParagraph2.textContent = "Player_2 saved to Local Storage:" + player2;
});

retrieveLocal.addEventListener("click", function() {
  let savedplayerl1 = localStorage.getItem("Player_1");
  let savedplayerl2 = localStorage.getItem("Player_2");
  if (savedplayerl1) {
    outputParagraph.textContent = "Player_1 retrieved from Local Storage: " + savedplayerl1;
    if(savedplayerl2)
    outputParagraph2.textContent = "Player_2 retrieved from Local Storage: " + savedplayerl2;
  } else {
    outputParagraph.textContent = "Player not found in Local Storage.";
  }
});

saveSession.addEventListener("click", function() {
  sessionStorage.setItem("Player_1", player1);
  sessionStorage.setItem("Player_2", player2);
  outputParagraph.textContent = "Player_1 saved to Session Storage: "+  player1;
  outputParagraph2.textContent = "Player_2 saved to Session Storage: "+  player2;
});

retrieveSession.addEventListener("click", function() {
  let savedplayerr1 = sessionStorage.getItem("Player_1");
  let savedplayerr2 = sessionStorage.getItem("Player_2");
  if (savedplayerr1) {
    outputParagraph.textContent = "Player retrieved from Session Storage: " + savedplayerr1;
    if(savedplayerr2)
    outputParagraph2.textContent = "Player retrieved from Session Storage: " + savedplayerr2;
  } else {
    outputParagraph.textContent = "Player not found in Session Storage.";
  }
});

lwinner.addEventListener("click",function(){
   lastWinner.textContent = "Player retrieved from Session Storage: " + winnerName;
})