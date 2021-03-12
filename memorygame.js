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
// add interval for how long two is displayed at a time and flips when it is not a match

// iterate through each card div and add another div element that will be visible upon window load
// maybe we can hev the back cards render first and then add innerHTML of the symbol for each card
let timesClicked = 0

function symbolsFunc () {
    let temp = []
    card.forEach((e, i) => {
        e.addEventListener( 'click', function() {
            timesClicked++
            // console.log(e.classList.value.includes('is-flipped'))
          //  let prev = e[i].querySelector('.frontCard').innerHTML
            console.log('e', e)
            temp.push(e.querySelector('.frontCard').innerHTML)
            e.classList.toggle('is-flipped')
            if(timesClicked > 1) {
               console.log(temp.length)
                if(temp[0] === temp[1]) {
                    e.classList.add('is-flipped');
                    temp = 0
                } else {
                    e.classList.remove('is-flipped');
                    console.log('not a match')
                }
                // console.log(e.querySelector('.frontCard'))

            }

        })
    })
}

symbolsFunc()
console.log(timesClicked)