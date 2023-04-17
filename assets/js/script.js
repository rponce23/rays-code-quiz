
// Elements declaration
var screenStart = document.querySelector("#start");
var quest = document.querySelector("#quizstart");
var startBtn = document.querySelector(".startb");
var exitBtn = document.querySelector(".exitb");
var outScreen = document.querySelector('.outmessage');
var qcount = 0;

function startfun() {
    screenStart.classList.add('hide');
    quest.classList.remove('hide');
    showQuestion();
    showAnswer();
};

function exitfun() {
    screenStart.classList.add('hide');
    outScreen.classList.remove('hide');
};

startBtn.addEventListener("click", startfun);
exitBtn.addEventListener("click", exitfun);


let equestion = questionsMatrix.map((item) => item.question);
let eanswer = questionsMatrix.map((item) => item.options);
let correct = questionsMatrix.map((item) => item.answer);

function showQuestion(){
    var h1El = document.createElement("h1");
    h1El.textContent = equestion[qcount];
    quest.append(h1El);
};
 
function showAnswer(){
    for (var j = 0; j <= eanswer.length; j++) {
        var choices = document.createElement("button");
        choices.name = "ebutton";
        choices.innerHTML = eanswer[qcount][j];
        quest.append(choices); 
        choices.onclick = function()
        {
            qcount++;
            showQuestion();
            showAnswer();
        }
    }
};









