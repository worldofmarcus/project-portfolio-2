//define audio variables

let audio = {
 cardFlip : new Audio("assets/audio/audio_flip.mp3"),
 cardMatch : new Audio("assets/audio/audio_match.mp3"),
 cardNoMatch : new Audio("assets/audio/audio_no_match.mp3"),
 gameOver : new Audio("assets/audio/audio_game_over.mp3"),
 complete : new Audio("assets/audio/audio_complete.mp3"),
};


/**
 * Function plays sound when user flips card
 * */
function flipCardAudio() {
    audio.cardFlip.play();
}

/**
 * Function plays sound when user matches cards
 * */
function matchAudio() {
    audio.cardMatch.play();
}

/**
 * Function plays sound when user fail to match cards
 * */
function noMatchAudio() {
    audio.cardNoMatch.play();
}

/**
 * Function plays sound when user has no tries left (game over)
 * */
function gameOverAudio() {
    audio.gameOver.play();
}

/**
 * Function plays sound when user has found all matching cards
 * */
function gameCompleteAudio() {
    audio.complete.play();
}

function muteAudio() {
    
    if (audio.muted)
    audio.muted = false;
  else
    audio.muted = true;
}