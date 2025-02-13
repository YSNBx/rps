let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
	playGame();
}

function playGame() {
	const humanChoice = getHumanChoice();
	const computerChoice = getComputerChoice();

	playRound(humanChoice, computerChoice);

	function getComputerChoice() {
		let random = Math.random();
		if (random >= 0 && random <= 0.32) {
			return "Rock";
		} else if (random > 0.32 && random < 0.66) {
			return "Paper"
		} else {
			return "Scissors";
		}
	}

	function getHumanChoice() {
		return prompt("Enter 'Rock', 'Paper' or 'Scissors'.");
	}

	function playRound(humanChoice, computerChoice) {
		const humanChoiceUpper = humanChoice.toUpperCase();
		const computerChoiceUpper = computerChoice.toUpperCase();

		if (humanChoiceUpper === computerChoiceUpper) {
			console.log("Tie");
		} else if (humanChoiceUpper === "ROCK" && computerChoiceUpper === "PAPER")  {
			console.log("You lose! Paper beats Rock!");
			++computerScore;
		} else if (humanChoiceUpper === "ROCK" && computerChoiceUpper === "SCISSORS") {
			console.log("You Win! Rock beats Scissors!");
			++humanScore;
		} else if (humanChoiceUpper === "PAPER" && computerChoiceUpper === "ROCK") {
			console.log("You Win! Paper beats Rock!");
			++humanScore;
		} else if (humanChoiceUpper === "PAPER" && computerChoiceUpper === "SCISSORS") {
			console.log("You Lose! Scissors beat Paper!")
			++computerScore;
		} else if (humanChoiceUpper === "SCISSORS" && computerChoiceUpper === "ROCK") {
			console.log("You Lose! Rock beats Scissors!");
			++computerScore;
		} else if (humanChoiceUpper === "SCISSORS" && computerChoiceUpper === "PAPER") {
			console.log("You Win! Scissors beats Paper");
			++humanScore;
		}
	}
}
