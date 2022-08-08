// Initiate global variables
const section = document.querySelectorAll('div')[14];
let cardFlipped = false;
let gamingBoardLocked = false;
let cardOne, cardTwo;
let difficultyLevel;

/**
 * Function creates array with images and id.
 */
function imageData() {
    return [{
            imgSrc: "assets/images/card_key_1.png",
            id: "card_key_1"
        },
        {
            imgSrc: "assets/images/card_key_2.png",
            id: "card_key_2"
        },
        {
            imgSrc: "assets/images/card_key_3.png",
            id: "card_key_3"
        },
        {
            imgSrc: "assets/images/card_key_4.png",
            id: "card_key_4"
        },
        {
            imgSrc: "assets/images/card_key_5.png",
            id: "card_key_5"
        },
        {
            imgSrc: "assets/images/card_diamond.png",
            id: "card_diamond"
        },
        {
            imgSrc: "assets/images/card_key_1.png",
            id: "card_key_1"
        },
        {
            imgSrc: "assets/images/card_key_2.png",
            id: "card_key_2"
        },
        {
            imgSrc: "assets/images/card_key_3.png",
            id: "card_key_3"
        },
        {
            imgSrc: "assets/images/card_key_4.png",
            id: "card_key_4"
        },
        {
            imgSrc: "assets/images/card_key_5.png",
            id: "card_key_5"
        },
        {
            imgSrc: "assets/images/card_diamond.png",
            id: "card_diamond"
        },
    ];
}

/**
 * Function to randomize array of cards (with help of shuffle array). Array is being returned to generateCards function.
 */
function randomize() {
    const gameCardData = imageData();
    shuffle(gameCardData);
    return (gameCardData);
}

/**
 * Shuffle card array and return to randomize function. Taken from: https://javascript.info/task/shuffle
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Function records users choice of difficulty and close modal
 */
function levelChoice(event) {
    difficultyLevel = event.id;
    closeModals();
}

/**
 *  Generate cards to be able to append them to HTML document structure.
 */
function generateCards() {
    closeModals();
    //gameCardData gets randomized array
    const gameCardData = randomize();
    //Run through array and add elements, classes, id and images to each item in array. Also includes event listener that waits for the event 'click' and then call function userFLippedCard()
    gameCardData.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('img');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
        front.src = item.imgSrc;
        back.src = "assets/images/card_back.png";
        card.setAttribute('id', item.id);
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        card.addEventListener('click', userFlippedCard);
    });
    //Check the level difficulty user has chosen and update triesLeft in scoreboard
    let triesLeft = difficultyLevel;
    if (difficultyLevel === "level-easy" || difficultyLevel === "level-easy-instructions" || difficultyLevel === "level-easy-game-over" || difficultyLevel === "level-easy-congratulations") {
        triesLeft = 12;
    } else if (difficultyLevel === "level-medium" || difficultyLevel === "level-medium-instructions" || difficultyLevel === "level-medium-game-over" || difficultyLevel === "level-medium-congratulations") {
        triesLeft = 8;
    } else {
        triesLeft = 5;
    }
    parseInt(document.getElementById('tries-left').innerText = triesLeft);
}

/**
 * Function checks if card has been clicked and adds class of cardFlipped to it. Function also saves the
 * clicked pairs in variables cardOne and cardTwo. Also includes check if one click already has been made.
 * Calls function checkCards when checks have been made
 */
function userFlippedCard() {
    if (gamingBoardLocked) return;
    if (this === cardOne) return;
    this.classList.add('cardFlipped');

    flipCardAudio();
    if (!cardFlipped) {
        cardFlipped = true;
        cardOne = this;
        return;
    }
    // Catch users second click
    cardTwo = this;
    //Check if we have a match
    checkCards();
}

/**
 * Function checks if cardOne and cardTwo matches eachother and also keeps track of users score
 */
function checkCards() {
    let triesLeft = document.getElementById('tries-left').innerText;
    let numberOfPoints = document.getElementById('number-of-points').innerText;
    if (cardOne.id === cardTwo.id) {
        cardOne.classList.add('not-clickable');
        cardTwo.classList.add('not-clickable');
        parseInt(document.getElementById('number-of-points').innerText = ++numberOfPoints);
        matchAudio();
        //Check if player has found all pair of cards.
        const checkWin = document.querySelectorAll('.cardFlipped');
        setTimeout(() => {
            if (checkWin.length === 12) {
                congratulationsModal();
                gameCompleteAudio();
            }
        }, 1400);
        resetBoard();
    } else {
        parseInt(document.getElementById('tries-left').innerText = --triesLeft);
        unflipCards();
        //Check if there are any remaining tries for player.
        setTimeout(() => {
            if (triesLeft === 0) {
                gameOverAudio();
                gameoverModal();
            }
        }, 1400);
    }
}

/**
 * Function removes class 'cardFlipped' from cardOne and cardTwo so that they flip back (through CSS). Also sets the gamingBoard lock to true
 * so that cards cannot be pressed until the cards have been 'unflipped'.
 * */
function unflipCards() {
    gamingBoardLocked = true;
    setTimeout(() => {
        cardOne.classList.remove('cardFlipped');
        cardTwo.classList.remove('cardFlipped');
        resetBoard();
        noMatchAudio();
    }, 1400);
}

/**
 * Function resets board (initial variables). This only happens when user has matched cards so that the game is ready for another round.
 * */
function resetBoard() {
    [cardFlipped, gamingBoardLocked] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

/**
 * Function starts new game by resetting initial variables/scores and generating a new randomized array of cards.
 * */
function newGame() {
    closeModals();
    [cardFlipped, gamingBoardLocked] = [false, false];
    [cardOne, cardTwo] = [null, null];
    let gameCardData = randomize();
    let front = document.querySelectorAll(".front");
    let card = document.querySelectorAll('.card');
    parseInt(document.getElementById('number-of-points').innerText = 0);
    gameCardData.forEach((item, index) => {
        card[index].classList.remove('cardFlipped');
        card[index].classList.remove('not-clickable');
        front[index].src = item.imgSrc;
        card[index].setAttribute('id', item.id);
    });
    //Check the level difficulty user has chosen and update triesLeft in scoreboard
    let triesLeft = difficultyLevel;
    if (difficultyLevel === "level-easy-instructions" || difficultyLevel === "level-easy-game-over" || difficultyLevel === "level-easy-congratulations") {
        triesLeft = 12;
    } else if (difficultyLevel === "level-medium-instructions" || difficultyLevel === "level-medium-game-over" || difficultyLevel === "level-medium-congratulations") {
        triesLeft = 8;
    } else {
        triesLeft = 5;
    }
    parseInt(document.getElementById('tries-left').innerText = triesLeft);
}