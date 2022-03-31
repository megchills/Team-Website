document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
    {
        name: 'avocado',
        img: '../imgs/avocado.png'
    },
    {
        name: 'avocado',
        img: '../imgs/avocado.png'
    },
    {
        name: 'donut',
        img: '../imgs/donut.png'
    },
    {
        name: 'donut',
        img: '../imgs/donut.png'
    },
    {
        name: 'cookies',
        img: '../imgs/cookies.png'
    },
    {
        name: 'cookies',
        img: '../imgs/cookies.png'
    },
    {
        name: 'pizza',
        img: '../imgs/pizza.png'
    },
    {
        name: 'pizza',
        img: '../imgs/pizza.png'
    },
    {
        name: 'lemons',
        img: '../imgs/lemons.png'
    },
    {
        name: 'lemons',
        img: '../imgs/lemons.png'
    },
    {
        name: 'cake',
        img: '../imgs/cake.png'
    },
    {
        name: 'cake',
        img: '../imgs/cake.png'
    }
]

//randomise card array
cardArray.sort(() => 0.5-Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const attemptsDisplay = document.querySelector('#attempts')
var cardsChosen = []
var cardsChosenID = []
var cardsWon = []


var attempts = 0

// create game board
function createBoard() {
    for (let i=0; i< cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', '../imgs/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches 
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneID = cardsChosenID[0]
    const optionTwoID = cardsChosenID[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneID].setAttribute('src', '../imgs/white.png')
        cards[optionTwoID].setAttribute('src', '../imgs/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneID].setAttribute('src', '../imgs/blank.png')
        cards[optionTwoID].setAttribute('src', '../imgs/blank.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenID = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
    attempts++
    attemptsDisplay.textContent = attempts
    console.log(attempts)
}

//flip card
function flipcard() {
    var cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}


createBoard()

})
