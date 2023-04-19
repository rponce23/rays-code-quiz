
// Elements declaration
var screenStart = document.querySelector("#start");
var quest = document.querySelector("#quizstart");
var finish = document.querySelector("#quizstop");
var startBtn = document.querySelector(".startb");
var exitBtn = document.querySelector(".exitb");
var outScreen = document.querySelector('.outmessage');
var timeEl = document.querySelector(".timedown");
var qcount = 0;
var secondsLeft = 60;
var score = 0;
var delayInMilli = 500;

function startfun() {
    screenStart.classList.add('hide');
    quest.classList.remove('hide');
    showQuestion();
    showAnswer();
    countdown();
};

function exitfun() {
    screenStart.classList.add('hide');
    outScreen.classList.remove('hide');
};

startBtn.addEventListener("click", startfun);
exitBtn.addEventListener("click", exitfun);

function countdown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
};

let equestion = questionsMatrix.map((item) => item.question);
let eanswer = questionsMatrix.map((item) => item.options);
let correct = questionsMatrix.map((item) => item.answer);
var optionsLen = Object.keys(eanswer[qcount]).length;

function showQuestion(){
    if (qcount>=10){
        return;
    }
    var h1El = document.createElement("h1");
    h1El.textContent = equestion[qcount];
    quest.append(h1El);
};
 
function showAnswer(){
    if (qcount>=10){
        return;
    }

    for (var j = 0; j < optionsLen; j++) {
        var correctAns = correct[qcount];
        var choices = document.createElement("button");
        choices.style.margin = "10px";
        choices.name = j;
        choices.innerHTML = eanswer[qcount][j];
        quest.append(choices); 
        choices.onclick = function()
        {
            var responded = this.name;
            if(responded == correctAns){
                console.log("Correct");
                score += 1;
                console.log(score);
            }else{
                console.log("Wrong");
                secondsLeft -= 5;
            }
            quest.innerHTML = '';
            nextQuestion();
        }
    }
};

function nextQuestion(){
    if(qcount == 9){
        secondsLeft = 1;
        endQuiz()
    }
    qcount++;
    showQuestion();
    showAnswer();
};

function endQuiz(){
    console.log("your score " + score);
    quest.classList.add('hide');
    finish.classList.remove('hide')
    var h3El = document.createElement("h3");
    h3El.textContent = "Your Score " + score;
    finish.append(h3El);
};

console.log(qcount.length);






