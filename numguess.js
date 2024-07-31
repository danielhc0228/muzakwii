function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleSubNav() {
    var subNavContent = document.getElementById("subNavContent");
    if (subNavContent.style.display === "block") {
        subNavContent.style.display = "none";
    } else {
        subNavContent.style.display = "block";
    }
}
let randomNumber, attempts;

function startGame() {
    // Generate a random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    setResult("");
    document.getElementById("guessInput").disabled = false;
    document.getElementById("restartButton").style.display = "none";
}

function checkGuess() {
    // Get the user's guess from the input field
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    // Validate the user's guess
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setResult("Please enter a valid number between 1 and 100.");
        return;
    }

    // Increment the number of attempts
    attempts++;

    // Compare the user's guess with the random number
    if (guess === randomNumber) {
        setResult(
            `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`
        );
        guessInput.disabled = true;
        document.getElementById("restartButton").style.display = "block";
    } else if (guess < randomNumber) {
        setResult("Too low! Try a higher number.");
    } else {
        setResult("Too high! Try a lower number.");
    }

    // Clear the input field
    guessInput.value = "";
}

function setResult(message) {
    const result = document.getElementById("result");
    result.textContent = message;
}

function restartGame() {
    startGame();
}

// Start the game when the page loads
startGame();
