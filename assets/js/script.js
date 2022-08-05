const section = document.querySelectorAll('div')[11];
let cardFlipped = false;
let gamingBoardLocked = false;
let cardOne, cardTwo;

function imageData() {
    return [{
            imgSrc: "../assets/images/card_key_1.png",
            id: "card_key_1"
        },
        {
            imgSrc: "../assets/images/card_key_2.png",
            id: "card_key_2"
        },
        {
            imgSrc: "../assets/images/card_key_3.png",
            id: "card_key_3"
        },
        {
            imgSrc: "../assets/images/card_key_4.png",
            id: "card_key_4"
        },
        {
            imgSrc: "../assets/images/card_key_5.png",
            id: "card_key_5"
        },
        {
            imgSrc: "../assets/images/card_diamond.png",
            id: "card_diamond"
        },
        {
            imgSrc: "../assets/images/card_key_1.png",
            id: "card_key_1"
        },
        {
            imgSrc: "../assets/images/card_key_2.png",
            id: "card_key_2"
        },
        {
            imgSrc: "../assets/images/card_key_3.png",
            id: "card_key_3"
        },
        {
            imgSrc: "../assets/images/card_key_4.png",
            id: "card_key_4"
        },
        {
            imgSrc: "../assets/images/card_key_5.png",
            id: "card_key_5"
        },
        {
            imgSrc: "../assets/images/card_diamond.png",
            id: "card_diamond"
        },
    ];
}

/**
 * Function to randomize array of cards. Array is being returned to generateCards function.
 */
function randomize() {
    const gameCardData = imageData();
    shuffle(gameCardData);
    console.log(gameCardData);
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
 *  Generate cards to be able to append them to HTML document structure.
 */

function generateCards() {
    closeModals();
    const gameCardData = randomize(); //gameCardData gets randomized array

    gameCardData.forEach((item) => //run through array and add elements, classes, id and images to each item in array
        {
            const card = document.createElement('div');
            const front = document.createElement('img');
            const back = document.createElement('img');
            card.classList = 'card';
            front.classList = 'front';
            back.classList = 'back';
            //Add image on each front and back card in array
            front.src = item.imgSrc;
            back.src = "../assets/images/card_back.png";
            //Add id to each card in array
            card.setAttribute('id', item.id);
            //Attach cards to section
            section.appendChild(card);
            card.appendChild(front);
            card.appendChild(back);
            //add event listener that waits for the event 'click' and then call function userFlippedCard()
            card.addEventListener('click', userFlippedCard);
        });
}

/**
 * Function checks if card has been clicked and adds class of cardFlipped to it. Function also saves the
 * clicked pairs in variables cardOne and cardTwo. Also includes check if one click already has been made.
 */
function userFlippedCard() {

    if (gamingBoardLocked) return;
    if (this === cardOne) return;
    this.classList.add('cardFlipped');
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
 * Function checks if cardOne and cardTwo matches eachother and also keeps track of users score.
 */

function checkCards() {
    let numberOfRounds = parseInt(document.getElementById('numberOfRounds').innerText);
    let triesLeft = document.getElementById('triesLeft').innerText;
    let numberOfPoints = document.getElementById('numberOfPoints').innerText;

    if (cardOne.id === cardTwo.id) {
        cardOne.classList.add('not-clickable');
        cardTwo.classList.add('not-clickable');
        parseInt(document.getElementById('numberOfRounds').innerText = ++numberOfRounds);
        parseInt(document.getElementById('numberOfPoints').innerText = ++numberOfPoints);

        //Check if player has found all pair of cards.
        const checkWin = document.querySelectorAll('.cardFlipped');
        setTimeout(() => {
            if (checkWin.length === 12) {
                congratulationsModal();
            }
        }, 1400);
        resetBoard();
    } else {
        parseInt(document.getElementById('numberOfRounds').innerText = ++numberOfRounds);
        parseInt(document.getElementById('triesLeft').innerText = --triesLeft);
        unflipCards();

        //Check if there are any remaining tries for player.
        setTimeout(() => {
            if (triesLeft === 0) {
                gameoverModal();
            }
        }, 1400);
    }
}

