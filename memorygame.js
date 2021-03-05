// Grab all the elements on the board 
let board = document.querySelector('.game-container');
let card = document.querySelectorAll('.card');

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

// Find way to only display the back and when you click one only two cards open at a time


function symbolsFunc () {
    card.forEach((e) => {
        console.log(e.innerHTML)
    })
}

symbolsFunc()