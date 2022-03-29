document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
    {
        name: 'avocado',
        img: 'Images/avocado.jpg'
    },
    {
        name: 'avocado',
        img: 'Images/avocado.jpg'
    },
    {
        name: 'banana',
        img: 'Images/banana.jpg'
    },
    {
        name: 'banana',
        img: 'Images/banana.jpg'
    },
    {
        name: 'biscuits',
        img: 'Images/biscuits.jpg'
    },
    {
        name: 'biscuits',
        img: 'Images/biscuits.jpg'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.jpg'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.jpg'
    },
    {
        name: 'lemons',
        img: 'Images/lemons.jpg'
    },
    {
        name: 'lemons',
        img: 'Images/lemons.jpg'
    },
    {
        name: 'cake',
        img: 'Images/cake.jpg'
    },
    {
        name: 'cake',
        img: 'Images/cake.jpg'
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
        card.setAttribute('src', 'Images/blank.png')
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
        cards[optionOneID].setAttribute('src', 'Images/white.png')
        cards[optionTwoID].setAttribute('src', 'Images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneID].setAttribute('src', 'Images/blank.png')
        cards[optionTwoID].setAttribute('src', 'Images/blank.png')
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


