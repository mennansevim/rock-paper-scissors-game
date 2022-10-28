
// Rock, Paper, Scissors
const gameCollection = new Array();
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const chooseButtons = document.querySelectorAll(".chooseButton");
const computerChoosen = document.querySelector("#computerChoosen");
const playerChoosen = document.querySelector("#playerChoosen");
const gameResult = document.querySelector("#gameResult");

let player;
let computer;
let result;

loadCollection();

chooseButtons.forEach(button => button.addEventListener("click", () => {
	player = button.textContent;
	chooseComputerShape()
	calculateResult()
	anounceResult()
}))


function loadCollection() {
	gameCollection.push("Rock");
	gameCollection.push("Paper");
	gameCollection.push("Scissors");
}

function chooseComputerShape() {
	var compSelectionIndex = randomIntFromInterval(1, 3);

	console.log(compSelectionIndex)
	switch (compSelectionIndex) {
		case 1:
			computer = "Rock"
			break;
		case 2:
			computer = "Paper"
			break;
		case 3:
			computer = "Scissors"
			break;
	}
}

function calculateResult() {
	if (computer === player) {
		result = "Equals"; return
	}

	if (player === "Rock")
		result = (computer === "Paper" ? "Computer Wins" : "Player Wins")

	else if (player === "Paper")
		result = (computer === "Scissors" ? "Computer Wins" : "Player Wins")

	else if (player === "Scissors")
		result = (computer === "Rock" ? "Computer Wins" : "Player Wins")
}

function anounceResult() {
	computerChoosen.innerHTML = computer;
	playerChoosen.innerHTML = player;
	gameResult.innerHTML = result;
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

