// let playerName = prompt("What's your name?")
// let playerSelection = prompt('Rock, Paper or Scissors')
let playerPoints = 0
let computerPoints = 0
let computerSelection = getComputerChoise()

function getComputerChoise() {
	const choise = ['Rock', 'Paper', 'Scissors']
	return choise[Math.floor(Math.random() * choise.length)]
}

function playRound(playerChoise, computerChoise) {
	let playerChoiseLower = playerChoise.toLowerCase()
	let computerChoiseLower = computerChoise.toLowerCase()
	if (playerChoiseLower === computerChoiseLower) {
		console.log(`Tie, both choose ${playerChoise}`)
	} else if (
		(playerChoiseLower === 'rock' && computerChoiseLower === 'scissors') ||
		(playerChoiseLower === 'paper' && computerChoiseLower === 'rock') ||
		(playerChoiseLower === 'scissors' && computerChoiseLower === 'paper')
	) {
		console.log(`You win. ${playerChoise} win to ${computerChoise}`)
	} else {
		console.log(`Computer win.${computerChoise} win to ${playerChoise}`)
	}
}

function game() {
	playRound(playerSelection, computerSelection)
}

// game()
