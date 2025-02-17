const buttons = document.querySelectorAll(".btn");
const div = document.createElement("div");
document.body.append(div);

buttons.forEach(btn => btn.addEventListener("click", function(e) {
	playRound(e.target.textContent, getComputerChoice());
}));

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let random = Math.random();
	if (random <= 0.32) {
		return "Rock";
	} else if (random < 0.66) {
		return "Paper"
	} else {
		return "Scissors";
	}
}

function playRound(humanChoice, computerChoice) {
	const humanChoiceUpper = humanChoice.toUpperCase();
	const computerChoiceUpper = computerChoice.toUpperCase();
	const p = document.createElement("p");

	if (humanChoiceUpper === computerChoiceUpper) {
		p.textContent = "Tie";
	} else if (humanChoiceUpper === "ROCK" && computerChoiceUpper === "SCISSORS") {
		p.textContent = "You Win! Rock beats Scissors!";
		++humanScore;
	} else if (humanChoiceUpper === "ROCK" && computerChoiceUpper === "PAPER") {
		p.textContent = "You Lose! Paper beats Rock!";
		++computerScore;
	} else if (humanChoiceUpper === "PAPER" && computerChoiceUpper === "ROCK") {
		p.textContent = "You Win! Paper beats Rock!";
		++humanScore;
	} else if (humanChoiceUpper === "PAPER" && computerChoiceUpper === "SCISSORS") {
		p.textContent = "You Lose! Scissors beat Paper!";
		++computerScore;
	} else if (humanChoiceUpper === "SCISSORS" && computerChoiceUpper === "ROCK") {
		p.textContent = "You Lose! Rock beats Scissors!";
		++computerScore;
	} else if (humanChoiceUpper === "SCISSORS" && computerChoiceUpper === "PAPER") {
		p.textContent = "You Win! Scissors beats Paper";
		++humanScore;
	}

	const pScore = document.createElement("p");
	pScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

	div.appendChild(p);
	div.appendChild(pScore);

	if (humanScore === 5 || computerScore === 5) {
		const p = document.createElement("p");
		if (humanScore === 5) {
			p.textContent = "You won the game, congratulations!";
		} else if (computerScore === 5) {
			p.textContent = "You lost the game, try again!";
		}
		div.appendChild(p);
		buttons.forEach(btn => btn.disabled = true)
	}
}
