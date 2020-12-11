var resaultSection = document.getElementById('resault');
var playerScore = document.getElementById('playerScore');
var oponentScore = document.getElementById('oponentScore');
var playerScoreInt;
var oponentScoreInt;

var welcomeUI = document.getElementById('welcomeUI');
var welcomeMsg = document.getElementById('welcomeMsg');
var playGroundUI = document.getElementById('playGroundUI');
var gameOverMsg = document.getElementById('gameOverMsg');


var playerNameInput;
var playerName = document.getElementById('playerName');

function play() {
  playerNameInput = document.getElementById('playerNameInput').value;
  if(playerNameInput.length < 3){
    alert("please Enter a valid Name!");
  }else{
    playerNameDisplay.textContent = playerNameInput;
    playerName.textContent = playerNameInput;

    welcomeUI.style.display = "none";
    welcomeMsg.style.display = "block";
    setTimeout(function(){
      welcomeMsg.style.display = "none";
      playGroundUI.style.display = 'block';
    }, 4000);

  }
}

function playAgain() {
  playerScore.innerText = '0';
  oponentScore.innerText = '0';
  gameOverMsg.style.display = "none";
  playGroundUI.style.display = "block";
}

function computerChoice(){
    var choice = Math.floor(Math.random()*3);
    var text = document.getElementById('oponentChoiceDisplay');
    if (choice === 0) {
      text.innerHTML = '<h3><i class="las la-fist-raised"></i></h3>';
      return 0;
    } else if (choice === 1) {
      text.innerHTML = '<h3><i class="las la-hand-paper"></i></h3>';
      return 1;
    } else {
      text.innerHTML = '<h3><i class="las la-hand-scissors"></i></h3>';
      return 2;
    }
}

function buttonDisabled(a) {
  document.getElementById('rockButton').disabled = a;
  document.getElementById('paperButton').disabled = a;
  document.getElementById('scissorsButton').disabled = a;
}

var resaultRefreshRate = 900;

function moveRock(){
  resaultSection.innerText = "";
  // disable the clickability behavior of all the buttons after a press
  buttonDisabled(true);
  setTimeout(function(){
    buttonDisabled(false);
}, 1500);

  var text = document.getElementById("playerChoiceDisplay");
  text.innerHTML = '<h3><i class="las la-fist-raised"></i></h3>';
  move();
  var c = computerChoice();
  moveTwo();
  setTimeout(function(){
    showResault(0, c);
  }, resaultRefreshRate);
}

function movePaper(){
  resaultSection.innerText = "";

  // disable the clickability behavior of all the buttons after a press
  buttonDisabled(true);

  setTimeout(function(){
    buttonDisabled(false);
  }, 1500);

  var text = document.getElementById("playerChoiceDisplay");
  text.innerHTML = '<h3><i class="las la-hand-paper"></i></h3>';
  move();
  var c = computerChoice();
  moveTwo();
  setTimeout(function(){
    showResault(1, c);
  }, resaultRefreshRate);
}

function moveScissors(){
  resaultSection.innerText = "";

  // disable the clickability behavior of all the buttons after a press
  buttonDisabled(true);
  setTimeout(function(){
    buttonDisabled(false);
  }, 1500);

  var text = document.getElementById("playerChoiceDisplay");
  text.innerHTML = '<h3><i class="las la-hand-scissors"></i></h3>';
  move();
  var c = computerChoice();
  moveTwo();
  setTimeout(function(){
    showResault(2, c);
  }, resaultRefreshRate);
}

var frameSpeed = 13;

function move(){
  var element = document.getElementById("playerChoiceDisplay");
  var pos = 250;
  var opac = 0;
  var id = setInterval(frame, frameSpeed);
  function frame(){
    if(pos >= 540){
      clearInterval(id);
    }else{
      pos+=3;
      element.style.bottom = pos + "px";
      element.style.opacity = opac;
      if(pos <= 310) {
        opac += 0.02;
      }
      else if (pos <= 430) {
        opac += 0.03;
        pos+=0.03;
      }else{
        pos+=2;
        opac -= 0.1;
      }
    }
  }
}

function moveTwo(){
  var element = document.getElementById("oponentChoiceDisplay");
  var pos = 30;
  var opac = 0;
  var id = setInterval(frame, frameSpeed);
  function frame(){
    if(pos >= 350){
      clearInterval(id);
    }else{
      pos+=3;
      element.style.top = pos + "px";
      element.style.opacity = opac;
      if(pos <= 80) {
        opac += 0.02;
      }
      else if (pos <= 220) {
        opac += 0.03;
        pos+=0.03;
      }else{
        pos+=2;
        opac -= 0.07;
      }
    }
  }
}

function showResault(a, b) {
  if(a === b){
    resaultSection.innerText = "It's a Draw 😂";
  }else if(a === 0 && b === 1){
    resaultSection.innerText = "You Win 🥳";
    updateScore(0);
  }else if(a === 0 && b === 2){
    resaultSection.innerText = "I win 😜";
    updateScore(1);
  }else if(a === 1 && b === 0){
    resaultSection.innerText = "You Win 🤩";
    updateScore(0);
  }else if(a === 1 && b === 2){
    resaultSection.innerText = "I win 😎";
    updateScore(1);
  }else if(a === 2 && b === 1){
    resaultSection.innerText = "You Win 🤠";
    updateScore(0);
  }else if(a === 2 && b === 0){
    resaultSection.innerText = "I win 😋";
    updateScore(1);
  }
}

function updateScore(s){
  if(s === 0){

    playerScoreInt = parseInt(playerScore.textContent, 10);
    playerScoreInt++;
    playerScore.innerText = playerScoreInt;
    if(playerScoreInt === 10){
      gameOver(0);
    }
  }else if(s === 1){

    oponentScoreInt = parseInt(oponentScore.textContent, 10);
    oponentScoreInt++;
    oponentScore.innerText = oponentScoreInt;
    if (oponentScoreInt === 10) {
      gameOver(1);
    }
  }
}

function gameOver(r) {
  var winner = document.getElementById('whoWins');
  playGroundUI.style.display = 'none';
  gameOverMsg.style.display = 'block';

  if (r === 0) {
    winner.innerText = "You Won the game 😍";
  } else {
    winner.innerText = "I Won this time 😎";
  }
}
