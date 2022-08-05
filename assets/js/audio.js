//define audio variables

let cardFlip = new Audio("assets/audio/audio_flip.mp3");
let cardMatch = new Audio("assets/audio/audio_match.mp3");
let cardNoMatch = new Audio("assets/audio/audio_no_match.mp3");
let gameOver = new Audio("assets/audio/audio_game_over.mp3");
let complete = new Audio("assets/audio/audio_complete.mp3");

/**
 * Function plays sound when user flips card
 * */
function flipCardAudio() {

    setTimeout(() => {
        cardFlip.play();
      }, "150")

    
}

/**
 * Function plays sound when user matches cards
 * */
function matchAudio() {
    cardMatch.play();
}

/**
 * Function plays sound when user fail to match cards
 * */
function noMatchAudio() {
    cardNoMatch.play();
}

/**
 * Function plays sound when user has no tries left (game over)
 * */
function gameOverAudio() {
    gameOver.play();
}

/**
 * Function plays sound when user has found all matching cards
 * */
function gameCompleteAudio() {
    complete.play();
}