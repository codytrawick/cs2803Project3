var questionArray = [];
var documentObjects = {};
var correctAnswer = '';
var correctNum = 0;
var questionNumber = 0;

function loadScreen() {
    documentObjects.number = document.getElementById('questionNumber');
    documentObjects.q = document.getElementById('q');
    documentObjects.a1 = document.getElementById('a1');
    documentObjects.a2 = document.getElementById('a2');
    documentObjects.a3 = document.getElementById('a3');
    documentObjects.a4 = document.getElementById('a4');
    documentObjects.image = document.getElementById('imageDisplay');
    documentObjects.side = document.getElementById('side');

}

function startGame() {
    var prompt = document.getElementById('prompt');
    $(prompt).slideUp(1000, loadQuestion);
    questionArray = getQuestions();
    var progressTemp = "<div class='progress-bar' role='progressbar' style='width:" + 100 / questionArray.length + "%'></div>";
    document.getElementById('progress').innerHTML = progressTemp.repeat(questionArray.length);
    documentObjects.progress = document.getElementById('progress');
    questionNumber = 0;
    correctNum = 0;
    buttonEnable(true);
}

function loadQuestion() {
    var currentQuestionIndex = Math.floor(Math.random() * questionArray.length);
    var thisQuestion = questionArray.splice(currentQuestionIndex, 1)[0];
    documentObjects.q.innerHTML = thisQuestion.q;
    documentObjects.a1.innerHTML = thisQuestion.a1;
    documentObjects.a2.innerHTML = thisQuestion.a2;
    documentObjects.a3.innerHTML = thisQuestion.a3;
    documentObjects.a4.innerHTML = thisQuestion.a4;
    documentObjects.number.innerHTML = "Question " + ++questionNumber;

    correctAnswer = thisQuestion.c;
    documentObjects.image.src = thisQuestion.img;

}

function showResponse(bool) {
    documentObjects.progress.children[questionNumber - 1].className = 'progress-bar progress-bar-' + (bool ? 'success' : 'danger');
    documentObjects.progress.children[questionNumber - 1].innerHTML = bool ? "Correct!" : "Incorrect";
    buttonEnable(false);
    if (bool) correctNum++;
    setTimeout(function() {
        documentObjects.progress.children[questionNumber - 1].innerHTML = "";
        if (questionArray.length > 0) {
            loadQuestion();
            buttonEnable(true);
        }
        else {
            endGame();
        }
    }, 2000);

}

function checkAnswer(ansLocation) {
    var ansElement = document.getElementById(ansLocation);
    var ansVal = ansElement.innerHTML;
    showResponse(ansVal.valueOf() == correctAnswer.valueOf());


};

function buttonEnable(bool) {
    var buttons = document.getElementsByClassName('btn-block');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = !bool;

    }
}

function endGame() {
    var prompt = document.getElementById('prompt');
    $(prompt).slideDown(1000);
    prompt.children[0].innerHTML = "You've completed this quiz. You got " + correctNum / questionNumber * 100 + "% of the questions correct";
    prompt.children[1].innerHTML = "Restart";
}
