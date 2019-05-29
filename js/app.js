/* variable */
const card = document.querySelector('.deck');
const array = [];
let moves = 0;

/* when the card is clicked check the target and call the openCard() function on that target */
card.addEventListener('click', function (event) {
    const target = event.target;
    if (target.nodeName === 'LI') {
        openCard(target);
        pushArray(target);
    }
});

/* open the card that was clicked - add or remove classes */
function openCard(event) {
    if (event.classList.contains('open', 'show') === false) {
        event.classList.add('open', 'show');
    } else {
        event.classList.remove('open', 'show');
    }
}

// check if there are two cards in the array
function pushArray(event) {
    if (array.length === 0) {
        array.push(event);
    } else if (array.length === 1) {
        array.push(event);
        checkMatch();
    }
}

/* check if the two cards match. if not flip face down */
function checkMatch() {
    var first = array[0].classList;
    var second = array[1].classList
    if (array[0].children[0].classList[1] === array[1].children[0].classList[1]) {
        first.add('match');
        second.add('match');
        first.add('animated', 'bounce');
        second.add('animated', 'bounce');
        array.length = 0;
    } else {
        /* first.add('animated', 'jello'); */
        /* second.add('animated', 'jello'); */
        setTimeout(function () {
            first.remove('open', 'show');
        }, 800);

        setTimeout(function () {
            second.remove('open', 'show');
        }, 800);
        // reset the length of array to zero 
        array.length = 0;
        // change the color of stars to red
        star[moves].style.color = 'red';
        moves++;
    }
    if (moves === 10) {
        setTimeout(function () {
            restartGame();
            changeStarColor();
        }, 700);
    }
}

/* change the star's color when the two cards don't match */
function changeStarColor() {
    // change the color of stars to black
    for (var i = 0; i < 10; i++) {
        star[i].style.color = 'black';
    }
    // reset the moves to zero
    moves = 0;
}

// restart the game
function restartGame(event) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('open', 'show', 'match')) {
            list[i].classList.remove('open', 'show', 'match');
        }
    }
    changeStarColor();
}

