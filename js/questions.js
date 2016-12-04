var globalQuestions = [
    {q:'What dimension is Rick and Morty set in?', a1:'A-112', a2:'ZZ Plural Z alpha', a3:'C-137', a4:'The Upside Down', c:'C-137', img:'../img/question0.jpg'},
    {q:'What is the real name of Morty\'s dog?', a1:'Snowball', a2:'Snuffles', a3:'Samuel', a4:'Scooter', c:'Snowball', img:'../img/question1.jpg'},
    {q:'In Rick Potion number 9, what is the name given to the genetic mutations?', a1:'Spielburgs', a2:'Crawlies', a3:'Kreugers', a4:'Cronenburgs', c:'Cronenburgs', img:'../img/question2.jpg'},
    {q:'Which of the following was not at the barbecue?', a1:'Hamurai', a2:'Amish Cyborg', a3:'Jones the Dolphin', a4:'Pensylvester', img:'../img/question3.jpg', c:'Jones the Dolphin'},
    {q:'Who are the antagonists in Get Schwifty?', a1:'The Headists', a2:'Principle Vagina', a3:'The Cromulons', a4:'The General Motors', img:'../img/question4.png', c:'The Cromulons'}

];

function getQuestions() {
    var output = [];
    for (var i = globalQuestions.length; i--; ) {
        output[i] = globalQuestions[i];
    }
    return output;
}