// Define the html elements
const board = document.getElementById('game-board')

//Define game variables
let snake = [{ x: 10, y: 10 }]

// Draw game, map, snake, food
function draw() {
  board.innerHTML = ""
  drawSnake()
}

// Draw Snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake')
  })
}

// create a snake or food cube/div
function createGameElement(tag, className) {
  const element = document.createElement(tag)
  element.className = className
}