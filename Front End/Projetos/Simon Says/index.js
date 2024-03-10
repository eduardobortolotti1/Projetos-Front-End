var gameClickOrder = [];
var gameLevel = 0;
var currentClick = 0;
var robotIsPlaying = true;

//Start button
$("span").on("click", function(){
    startGame();
});

//Adds event listener logic to buttons
$(".button").on("click", function(event){
    var buttonObject = {
        target: $(event.target),
        color: $(event.target).text(),
        id: $(event.target).attr("id")
    }

    if (robotIsPlaying === true) {
        console.log("Wait for your turn!");
    }
    else {
        clickEffect(buttonObject.color, 100);
        buttonHandler(buttonObject);
    }

});

//Starts the game
function startGame(){
    //Resets everything
    gameClickOrder = [];
    gameLevel = 0;
    currentClick = 0;
    robotIsPlaying = false;
    $("main").css("background-color", "#334c56");
    console.log("Game start!")

    //Starts the game
    nextLevel();
};

//Checks if the button you pressed is the same one in the same order of the game.
function buttonHandler(buttonObject) {
    if (buttonObject.color === gameClickOrder[currentClick]) {
        if (currentClick === (gameClickOrder.length) - 1) {
            console.log("correct!");
            nextLevel();
        }
        else {
            console.log("correct!");
            currentClick += 1;
        }
    }
    else {
        gameOver();
    }
}

//Handles the start of the game and new levels.
function nextLevel(){
    console.log("next level!");

    gameLevel += 1;
    $("#game-title").html("Level " + gameLevel);

    robotIsPlaying = true;
    currentClick = 0;

    buttonObject = chooseRandomButton();
    gameClickOrder.push(buttonObject.color);

    //Cheating, basically.
    console.log(gameClickOrder);

    

    //Gives a 1s delay before calling the robot to play the new order.
    setTimeout(function() {
        robotOrderPlay(gameClickOrder, 0);
    }, 1000);}

function gameOver(){
    gameClickOrder = [];
    gameLevel = 0;
    currentClick = 0;
    robotIsPlaying = true;
    $("main").css("background-color", "red");
    $("#game-title").html("You lose! Click <span>Here</span> to restart!");

    //Adds new event listener to the span
    $("span").on("click", function(){
        startGame();
    });
    
}

//Reads every color of gameClickOrder and plays each one like a robot
function robotOrderPlay(array, index) {
    // Base case: If index exceeds array length, stop recursion
    if (index >= array.length) {
        robotIsPlaying = false
        return;
    }

    //Plays sound and effect
    clickEffect( gameClickOrder[index], 1000 )
    
    // Call the function recursively with a delay
    setTimeout(() => {
        robotOrderPlay(array, index + 1);
    }, 1000); // 1000 milliseconds = 1 second
}

function clickEffect(color, time) {
    playsound(color);
    var buttonElement = $("." + color);
    buttonElement.addClass("pressed");

    setTimeout(() => {
        buttonElement.removeClass("pressed");
    }, time);
}

//Returns a random button element from ID 1 to 4
function chooseRandomButton() {
    randomNumber = Math.floor(Math.random() * 4) + 1;
    var randomButton = $("#" + randomNumber);
    var buttonObject = {
        target: $(randomButton),
        color: $(randomButton).text(),
        id: $(randomButton).attr("id")
    }
    return buttonObject;
};

function playsound(color) {
    var audio = new Audio('./sounds/' + color + '.mp3');
    audio.play();
}