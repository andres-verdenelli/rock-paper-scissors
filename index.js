let playerName = ''
let playerScore = 0
let computerScore = 0
const playerNameElement = document.getElementById('player-name')
const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paper-button')
const scissorsButton = document.getElementById('scissors-button')
const playerScoreElement = document.getElementById('player-score')
const computerScoreElement = document.getElementById('computer-score')
const resultElement = document.getElementById('result')
const buttonsContainer = document.getElementById('buttons-container')
const winnerContainer = document.getElementById('winner-container')
const inputNameElement = document.getElementById('input-name')
const submitNameButton = document.getElementById('submit-name-button')
const gameContainer = document.getElementById('game-container')
const welcomeContainer = document.getElementById('welcome-container')
const playAgainButton = document.getElementById('play-again-button')
const changeNameButton = document.getElementById('change-name-button')

rockButton.addEventListener('click', () => playRound('Rock'))
paperButton.addEventListener('click', () => playRound('Paper'))
scissorsButton.addEventListener('click', () => playRound('Scissors'))
submitNameButton.addEventListener('click', () => {
	playerName = inputNameElement.value
	playerNameElement.innerText = playerName
	inputNameElement.value = ''
	startNewGame()
})
playAgainButton.addEventListener('click', () => {
	startNewGame()
})
changeNameButton.addEventListener('click', () => {
	welcomeContainer.style.display = 'flex'
	gameContainer.style.display = 'none'
})

function getRandomChoise() {
	const choices = ['Rock', 'Paper', 'Scissors']
	return choices[Math.floor(Math.random() * choices.length)]
}
function updateScores() {
	playerScoreElement.innerText = playerScore
	computerScoreElement.innerText = computerScore
}
function anyoneWon() {
	if (playerScore === 2 || computerScore === 2) {
		buttonsContainer.style.display = 'none'
		winnerContainer.style.display = 'block'
	}
}
function playRound(playerChoise) {
	const computerChoise = getRandomChoise()
	if (playerChoise === computerChoise) {
		resultElement.innerText = `Tie 🤝`
	} else if (
		(playerChoise === 'Rock' && computerChoise === 'Scissors') ||
		(playerChoise === 'Paper' && computerChoise === 'Rock') ||
		(playerChoise === 'Scissors' && computerChoise === 'Paper')
	) {
		resultElement.innerText = `${playerName} win 💪`
		playerScore++
	} else {
		resultElement.innerText = `Computer win 😞`
		computerScore++
	}
	updateScores()
	anyoneWon()
}

function startNewGame() {
	playerScore = 0
	computerScore = 0
	updateScores()
	resultElement.innerText = ''
	welcomeContainer.style.display = 'none'
	gameContainer.style.display = 'block'
	buttonsContainer.style.display = 'block'
	winnerContainer.style.display = 'none'
}
