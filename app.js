//selecting all the divs with name square
const square = document.querySelectorAll('.square')
//selecting all the divs with name dragon
const dragon = document.querySelectorAll('.dragon')
//selecting div with id time left
const timeLeft = document.querySelector('#time-left')
//selecting div with id score
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare(){

	square.forEach(className => {
		className.classList.remove('dragon')
	})
	let randomPosition = square[Math.floor(Math.random()*9)]

	randomPosition.classList.add('dragon')

	//assign the id of the randomPosition to hitPosition
	hitPosition = randomPosition.id
}

square.forEach(id => {

	id.addEventListener('mouseup', () => {
		if(id.id === hitPosition){
			result = result + 1
			score.textContent = result

		}
	})
})

function moveDragon() {
	let timerId = null
	timerId = setInterval(randomSquare, 800)
}



function countDown(){
	currentTime--
	timeLeft.textContent = currentTime
	if(currentTime===0){
		clearInterval(timerId)
		alert("Game Over\nYour total score is: " + result)
	}
}

let timerId = setInterval(countDown, 1000)

moveDragon()