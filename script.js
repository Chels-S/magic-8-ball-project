$(document).ready(function() {
var magic8ball = {};
magic8ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes-definitely", "You may rely on it", "As i see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "Outlook not so good", "Very doubtful"];

$("#answer").hide();

magic8ball.askQuestion = function(question) {
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * 	this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var answer = this.listOfAnswers[randomIndex];
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#answer").fadeIn(4000);
	$("#answer").text(answer);

	console.log(question);
	console.log(answer);
		};

  $("#answer").hide();
var onClick = function(){
	$("#8ball").effect("shake");
	setTimeout( function() {
var question = prompt("ASK A YES/NO QUESTION!");
	magic8ball.askQuestion(question);
	}, 500);
};

	$("#questionButton").click(onClick);

});
//magic8ball.askquestion ("Will I ever learn JavaScript?");
