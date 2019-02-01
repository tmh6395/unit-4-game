
$(function () {
    // Set-up `current-sum = 0`, `wins = 0`, and `losses = 0` on game start
    let sum = 0;  // "Placeholder 0s"
    let goalNumber = 0;
    let gamesWon = 0;
    let gamesLost = 0;

    $("#current-sum").html(sum);
    $("#wins-text").html("Wins: " + gamesWon);
    $("#losses-text").html("Losses: " + gamesLost);


    // Declared here rather than in setGemValues() as global variables for reset() to also use
    let sapphireValue = 0;  // "Placeholder 0s"
    let emeraldValue = 0;
    let rubyValue = 0;
    let diamondValue = 0;


    function setGoal() {
        // total number RNG between 19 & 120 inclusively
        goalNumber = Math.floor(Math.random() * 102) + 19;
        $("#goal-value").html(goalNumber);
    }
    // Call the function to set a value for the goal
    setGoal();


    function setGemValues() {
        // Gems' RNG between 1 & 12 inclusively

        emeraldValue = Math.floor(Math.random() * 12 + 1);
        rubyValue = Math.floor(Math.random() * 12 + 1);
        diamondValue = Math.floor(Math.random() * 12) + 1;

        // Make sapphire's value odd for the case of "an odd-numbered goal but all-even-gem values"
        let oddNum = Math.floor(Math.random() * 12 + 1);
        if (oddNum % 2 === 1) {
            sapphireValue = oddNum;
        }
        else {
            sapphireValue = oddNum + 1;
        }
    }
    // Call the function to set values for the gems
    setGemValues();


    // Click Handlers for the gems
    $("#sapphire-gem").on("click", function (event) {
        sum += sapphireValue;
        checkGame();
        $("#current-sum").html(sum);
    });

    $("#emerald-gem").on("click", function (event) {
        $("#current-sum").html(sum += emeraldValue);
        checkGame()
        $("#current-sum").html(sum);
    });

    $("#ruby-gem").on("click", function (event) {
        $("#current-sum").html(sum += rubyValue);
        checkGame()
        $("#current-sum").html(sum);
    });

    $("#diamond-gem").on("click", function (event) {
        $("#current-sum").html(sum += diamondValue);
        checkGame()
        $("#current-sum").html(sum);
    });


    // Check to see if the game should end
    function checkGame() {
        // Win condition
        if (sum === goalNumber) {
            gamesWon++;
            $("#wins-text").html("Wins: " + gamesWon);
            reset();
        }
        // Loss condition
        else if (sum > goalNumber) {
            gamesLost++
            $("#losses-text").html("Losses: " + gamesLost);
            reset();
        }
    }

    // Function to reset the game (called after a win or loss)
    function reset() {
        sum = 0;
        $("#current-sum").html(sum);
        setGoal();
        setGemValues();
    }

});