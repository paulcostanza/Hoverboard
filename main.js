// Grad our element from HTML
const container = document.getElementById('container')

// Variables that represent the colors we will use and the amount of squares on the page
const colors = ['#349d93', '#11c7ad', '#9affec', '#3a98db', '2e76e1']
const SQUARES = 5000

// Creates our grid of squares
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // adds event listeners whether the mouse is over the square or not
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

// adds color when hovering
const setColor = e => {
    const color = getRandomColor()
    e.style.background = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// removes color after a few seconds
const removeColor = e => {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}

// creates a random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]
