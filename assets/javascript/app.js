$(document).ready(function() {
//global variables
var number = 60;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
//questions arrays
var questions = [{
    question: "Which Beastie Boy song peaked at #7 on the Billboard Top 100 in 1987?",
    answerList: ["Paul Revere", "(You Gotta) Fight For Your Right (To Party)", "Johnny Ryall", "Brass Monkey"],
    answer: 1},{
    question: "Which Beastie Boys album became the first ever rap album to hit #1 on the charts in the USA?",
    answerList: ["Paul's Boutique", "Licened to Ill", "Check Your Head", "Ill Communication"],
    answer: 1},{
    question: "What does Adam Yauch's moniker 'MCA' stand for?",
    answerList: ["Microphone Adam", "Master of Ceremonies Adam", "Mister Class Adam", "MC Adam"],
    answer: 1},{
    question: "The Beastie Boys didn't always used to be a rap group, what type of music did they play before hitting it big with rap?",
    answerList: ["Jazz", "Blues", "Disco", "Punk"],
    answer: 3},{
    question: "What does 'Beastie' in 'Beastie Boys' stand for?",
    answerList: ["Boys Entering Anarchistic States Toward Internal Excellence", "Beast-ie", "The Beastie Boys have no idea what it means", "Run-DMC gave them the name after hearing their raps"],
    answer: 0}];
    //start function
    $("#start").on("click", function(){
        //hides the start button once game starts
        $(this).hide();
        //shows the timer when game starts
        $("time").html("<h2>Time Remaining: 90 seconds</h2>" + "<br>");
        //run the timer
        run();
        //questions and multiple choice answers displayed
        $("#question1").html("<h3>" + questions[0].question + "</h3>");
        $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
        );
        $("#question2").html("<h3>" + questions[1].question + "</h3>");
        $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
        );
        $("#question3").html("<h3>" + questions[2].question + "</h3>");
        $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
        );
        $("#question4").html("<h3>" + questions[3].question + "</h3>");
        $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
        );
        $("#question5").html("<h3>" + questions[4].question + "</h3>");
        $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
        );
        //done button
        $("#submit").html("<button id='done' class='btn'>Done</button>");
        $("#done").on("click", function(){
            //keeps track of score
            keepingScore();
            //displays the results
            displayResults();
        });
    });
    //timer interval
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    //decreases number by one every second
    function decrement() {
        number--;
        //displays time remaining
        $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");
        //when timer reaches zero
        if(number === 0) {
            //stops timer
            stop();
            //keeping score
            keepingScore();
            //displays the reults
            displayResults();
        }
    }
    function stop() {
        clearInterval(intervalId);
    }
    //function that displays results
    function displayResults() {
        $("#time").hide();
        $("#question1").hide();
        $("#answer1").hide();
        $("#question2").hide();
        $("#answer2").hide();
        $("#question3").hide();
        $("#answer3").hide();
        $("#question4").hide();
        $("#answer4").hide();
        $("#question5").hide();
        $("#answer5").hide();
        $("#submit").hide();
        $("#resultsMessage").html("<h3>Great Job!</h3>");
        $("#correct").html("Right Answers: " + rightAnswers);
        $("#incorrect").html("Wrong Answers: " + wrongAnswers);
        $("#unanswered").html("Unanswered: " + unanswered);
    }
    //function that keeps score
    function keepingScore() {
        var userAnswer1 = $("input[name='answer1']:checked").val();
        var userAnswer2 = $("input[name='answer2']:checked").val();
        var userAnswer3 = $("input[name='answer3']:checked").val();
        var userAnswer4 = $("input[name='answer4']:checked").val();
        var userAnswer5 = $("input[name='answer5']:checked").val();
        //if else for questions 1 through 5
        if (userAnswer1 === undefined) {
            unanswered++;
        } else if (userAnswer1 == questions[0].answer) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
        if (userAnswer2 === undefined) {
            unanswered++;
        } else if (userAnswer2 == questions[1].answer) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
        if (userAnswer3 === undefined) {
            unanswered++;
        } else if (userAnswer3 == questions[2].answer) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
        if (userAnswer4 === undefined) {
            unanswered++;
        } else if (userAnswer4 == questions[3].answer) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
        if (userAnswer5 === undefined) {
            unanswered++;
        } else if (userAnswer5 == questions[4].answer) {
            rightAnswers++;
        } else {
            wrongAnswers++;
        }
    };
});