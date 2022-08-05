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
    return(gameCardData);
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