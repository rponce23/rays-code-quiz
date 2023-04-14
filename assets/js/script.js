
// Elements declaration
var screenStart = document.querySelector("#start");
var quest = document.querySelector("#quizstart");
var startBtn = document.querySelector(".startb");
var exitBtn = document.querySelector(".exitb");
var outScreen = document.querySelector('.outmessage')

function startfun() {
    screenStart.classList.add('hide');
    quest.classList.remove('hide');
};

function exitfun() {
    screenStart.classList.add('hide');
    outScreen.classList.remove('hide');
};

startBtn.addEventListener("click", startfun);
exitBtn.addEventListener("click", exitfun);



var h1El = document.createElement("h1");
let pregu = questionsMatrix.map((item) => item.question);
console.log(pregu[0]); //aqui si se ve la pregunta
h1El.textContent = pregu[0];
quest.append(h1El); //pero no lo muestra en pantalla






