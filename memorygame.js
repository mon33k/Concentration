// Grab all the elements on the board 
let board = document.querySelector('.game-container');
let allCards = document.querySelectorAll('.card');
let movesMade = document.querySelector('.movesMade')
let displayTime = document.querySelector('.timeDisplayed')
// Find a way to store, randomize, and insert the value for symbols on each card
const symbols = {
    '🍗': false,
    '🥞': false,
    '🥓': false,
    '🍔': false,
    '🌭': false,
    '🥨': false,
    '🍟': false,
    '🍕': false,
} 
 
// Hardcode the values for the cards for now 

// Only two cards open at a time
let firstCard;
let secondCard;

// Interval for how long two is displayed at a time and flips when it is not a match
let intervalFlip;
let intervalGameTime;

// Show curr num of moves a user made
let usersMoves = 0;
// Number of Matches
let matchesFound = 0;
// have a timer to show how long it took until they won 
let usersTime;

// function gameTimer() {
//     usersTime = setInterval(function(){

//     }, )
// }


function toggleCards() {
  
    allCards.forEach((card, i) => {
        card.addEventListener( 'click', function() {
           
            card.classList.toggle('is-flipped')
            if(!firstCard) {
                firstCard = card 
            } else {
                secondCard = card 
               checkForMatch()
            }

        })
    })
}


function checkForMatch() {   
    let firstChild = firstCard.querySelector('.frontCard')
    let secondChild = secondCard.querySelector('.frontCard')
    usersMoves++
    movesMade.innerHTML = usersMoves;
        
        if(firstChild.innerHTML === secondChild.innerHTML) {
            matchesFound++
            firstCard.classList.add('is-flipped')
            secondCard.classList.add('is-flipped')
           
            firstCard = undefined
            secondCard = undefined

        } else {
            delayFlipUnmatched(firstCard, secondCard)
       
            firstCard = undefined
            secondCard = undefined
         
        }
        if(matchesFound === 8){
            return alert("You Won!!!!!")
        }
}

function delayFlipUnmatched (firstCard, secondCard) {
    intervalFlip = setInterval(function(){
        firstCard.classList.remove('is-flipped')
        secondCard.classList.remove('is-flipped')
        clearInterval(intervalFlip)
        
    },1500)
   
}
     

toggleCards()
