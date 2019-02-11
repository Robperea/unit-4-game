var randomNumber = Math.floor(Math.random() * 101) + 19;
var userScore = 0;
var wins = 0;
var losses = 0;


var crystal1Val = Math.floor(Math.random() * 12) + 1;
var crystal2Val = Math.floor(Math.random() * 12) + 1;
var crystal3Val = Math.floor(Math.random() * 12) + 1;
var crystal4Val = Math.floor(Math.random() * 12) + 1;

$("#random-number").html("The number is " + randomNumber);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#user-score").html("Your score: " + userScore);



//Crystal Values
$("#crystal-1").on("click", function() {
    userScore = userScore + crystal1Val;
    $("#user-score").text(userScore);
    console.log("New userScore = " + userScore);
})

$("#crystal-2").on("click", function() {
    userScore = userScore + crystal2Val;
    $("#user-score").text(userScore);
    console.log("New userScore = " + userScore);
})

$("#crystal-3").on("click", function() {
    userScore = userScore + crystal3Val;
    $("#user-score").text(userScore);
    console.log("New userScore = " + userScore);
})

$("#crystal-4").on("click", function() {
    userScore = userScore + crystal4Val;
    $("#user-score").text(userScore);
    console.log("New userScore = " + userScore);
})

//User Score - wins and losses
var gameResult = function () {
    if (userScore === randomNumber) {
    wins++;
    console.log("Wins: " + wins);
    $("#wins").text(wins);
    alert("You win!");
    reset ();
}
else if (userScore > randomNumber) {
    losses++;
    console.log("Losses " + losses);
    $("#losses").text(losses);
    alert("You lose!");
    reset();
}
}

//reset function 
var reset = function () {
    randomNumber = Math.floor(Math.random() + 102) + 19;
    console.log(randomNumber)
    $("#random-number").html(randomNumber);
    crystal1Val = Math.floor(Math.random() * 12) + 1;
    crystal2Val = Math.floor(Math.random() * 12) + 1;
    crystal3Val = Math.floor(Math.random() * 12) + 1;
    crystal4Val = Math.floor(Math.random() * 12) + 1;
    userScore = 0;
}