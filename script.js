let randomNumber = Math.floor(Math.random() * 100);
let attempts = 0;

function check() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("result");
    attempts++;

    if (isNaN(userGuess)) {
        result.textContent = "Please enter a valid number.";
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
    } else {
        result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
}