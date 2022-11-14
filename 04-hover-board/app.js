const board = document.querySelector('#board')
const colors = ['#efdca0', '#ff8a8a', '#45ed72', '#35a4e9', '#e465d8']
const SQUARES_NUMBER = 1500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const randomColor = getRandomColor()
    element.style.backgroundColor = randomColor
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}


function removeColor(element) {
    element.style.backgroundColor = '#303030'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}