// Grab all the elements on the board 
let board = document.querySelector('.game-container');
let allCards = document.querySelectorAll('.card');

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
   

        if(firstChild.innerHTML === secondChild.innerHTML) {
            
            firstCard.classList.add('is-flipped')
            secondCard.classList.add('is-flipped')
           
            firstCard = undefined
            secondCard = undefined

        } else {
            
            delayFlipUnmatched(firstCard, secondCard)
       
            firstCard = undefined
            secondCard = undefined
         
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
