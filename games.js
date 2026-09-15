function goHome() {
    window.location.href = "index.html";
}


function startGame(gameName) {

    const title = document.getElementById("gameTitle");
    const message = document.getElementById("gameMessage");

    title.textContent = "🎮 " + gameName;

    if (gameName === "Number Guess") {

        message.innerHTML = `
            <p>I'm thinking of a number between 1 and 10.</p>

            <input
                type="number"
                id="guessInput"
                placeholder="Enter number"
                min="1"
                max="10"
            >

            <button onclick="checkNumber()">Guess</button>

            <p id="guessResult"></p>
        `;

    } else if (gameName === "Rock Paper Scissors") {

        message.innerHTML = `
            <p>Choose your move:</p>

            <div class="rps-buttons">
                <button onclick="playRPS('Rock')">✊ Rock</button>
                <button onclick="playRPS('Paper')">✋ Paper</button>
                <button onclick="playRPS('Scissors')">✌️ Scissors</button>
            </div>

            <p id="rpsResult"></p>
        `;

    } else {

        message.innerHTML = `
            <p>🚧 ${gameName} is coming soon!</p>
            <p>We're building this game for ChillChat.</p>
        `;
    }
}


function checkNumber() {

    const input = document.getElementById("guessInput");
    const result = document.getElementById("guessResult");

    const guess = Number(input.value);

    if (guess < 1 || guess > 10) {
        result.textContent = "Enter a number from 1 to 10.";
        return;
    }

    const secret = Math.floor(Math.random() * 10) + 1;

    if (guess === secret) {
        result.textContent = "🎉 Correct! You won!";
    } else {
        result.textContent = "❌ Wrong! The number was " + secret;
    }
}


function playRPS(player) {

    const choices = ["Rock", "Paper", "Scissors"];

    const computer =
        choices[Math.floor(Math.random() * choices.length)];

    const result = document.getElementById("rpsResult");

    if (player === computer) {

        result.textContent =
            "🤝 Draw! Computer chose " + computer;

    } else if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {

        result.textContent =
            "🎉 You Win! Computer chose " + computer;

    } else {

        result.textContent =
            "😢 You Lose! Computer chose " + computer;
    }
}
