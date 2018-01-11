var startGame = document.getElementById('start');
var gameData = document.getElementById('gameData');
var openWidth = document.documentElement.clientWidth;
var openHeigth =document.documentElement.clientHeight;
var object = document.getElementById('object');
var totalScore = document.getElementById('totalScore');
var speed = document.getElementById('speed');
var outOfTatget = document.getElementById('miss');
var missAudio = document.getElementById('missAudio');
var inTargAudio = document.getElementById('inTargAudio');
var pause = false;
var timeInterval = 2500;
var level = document.getElementById('level');
var timerId = window.addEventListener('click', miss);
var countInt = '0';
startGame.onclick = start;
object.addEventListener('click', inTarget);
//object.addEventListener('click', change);



function inTarget() { 
    if(pause){
    totalScore.innerHTML++;
    event.stopPropagation();
    stop();                                          //останавливаю таймер по нажатию
    showFigure();
    window.timerId = window.setInterval(showFigure, timeInterval);     //снова запускаю
    inTargAudio.play();
    if(totalScore.innerHTML % 5 === 0) {
        speed.innerHTML++;
        level.innerHTML++;
        timeInterval -= 100;
        object.addEventListener('click', change);
    }
  }
}
    
function miss() {
    if(pause){
    totalScore.innerHTML = '0';
    countInt = '0';
    outOfTatget.innerHTML = 'Мимо!'
    window.setTimeout(func, 500);
    missAudio.play();
    function func() {
        outOfTatget.innerHTML = '';
    }
    }
    return true;    
}
function start() {
    startGame.style.display ='none';
    gameData.style.display = 'block';
    event.stopPropagation();
//    inTargAudio.play();
    pause = true;

//    window.timerId = window.setInterval(showFigure, timeInterval);
}

function stop() {
	window.clearInterval(window.timerId);
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showFigure() {
    object.style.left = getRandomInRange(1, openWidth - 110) + 'px';
    object.style.top = getRandomInRange(1, openHeigth - 110) + 'px';
    countInt++;              // эта переменная отмечает кол-во изменений положения объекта, что бы потом сравнить с                             количеством кликов по объекту
    checkClick();
}
function checkClick() {      // эта функция проверяет был ли произведен клик мышки по объекту во время интервала
    if(totalScore.innerHTML == countInt){
    return;
    } else {
      totalScore.innerHTML = '0';
      countInt = '0';
      outOfTatget.innerHTML = 'Не успел!'
      window.setTimeout(func, 500);
      missAudio.play();
      function func() {
      outOfTatget.innerHTML = '';
    }
    return true;    
    }
}


function change() {
    this.style.width = '40px';
    this.style.height = '40px';
//    object.removeEventListener('click', change);
//    object.addEventListener('click', newChange);
}
