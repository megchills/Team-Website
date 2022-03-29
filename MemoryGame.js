document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
    {
        name: 'avocado',
        img: 'avocado.jpg'
    },
    {
        name: 'avocado',
        img: 'avocado.jpg'
    },
    {
        name: 'banana',
        img: 'banana.jpg'
    },
    {
        name: 'banana',
        img: 'banana.jpg'
    },
    {
        name: 'biscuits',
        img: 'biscuits.jpg'
    },
    {
        name: 'biscuits',
        img: 'biscuits.jpg'
    },
    {
        name: 'pizza',
        img: 'pizza.jpg'
    },
    {
        name: 'pizza',
        img: 'pizza.jpg'
    },
    {
        name: 'lemons',
        img: 'lemons.jpg'
    },
    {
        name: 'lemons',
        img: 'lemons.jpg'
    },
    {
        name: 'cake',
        img: 'cake.jpg'
    },
    {
        name: 'cake',
        img: 'cake.jpg'
    }
]

//randomise card array
cardArray.sort(() => 0.5-Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenID = []
var cardsWon = []



// create game board
function createBoard() {
    for (let i=0; i< cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'blank.png')
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
        cards[optionOneID].setAttribute('src', 'white.png')
        cards[optionTwoID].setAttribute('src', 'white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneID].setAttribute('src', 'blank.png')
        cards[optionTwoID].setAttribute('src', 'blank.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenID = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
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


