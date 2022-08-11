// Initiate global audio variables

let audio = {
    mute: false,
    cardFlip: new Audio("assets/audio/audio_flip.mp3"),
    cardMatch: new Audio("assets/audio/audio_match.mp3"),
    cardNoMatch: new Audio("assets/audio/audio_no_match.mp3"),
    gameOver: new Audio("assets/audio/audio_game_over.mp3"),
    complete: new Audio("assets/audio/audio_complete.mp3"),
};

/**
 * Function plays sound when user flips card unless audio.mute is true
 * */
function flipCardAudio() {
    if (audio.mute === true) {
        return;
    } else {
        audio.cardFlip.play();
    }
}

/**
 * Function plays sound when user matches cards unless audio.mute is true
 * */
function matchAudio() {
    if (audio.mute === true) {
        return;
    } else {
        audio.cardMatch.play();
    }
}

/**
 * Function plays sound when user fail to match cards unless audio.mute is true
 * */
function noMatchAudio() {

    if (audio.mute === true) {
        return;
    } else {
        audio.cardNoMatch.play();
    }
}

/**
 * Function plays sound when user has no tries left (game over) unless audio.mute is true
 * */
function gameOverAudio() {
    if (audio.mute === true) {
        return;
    } else {
        audio.gameOver.play();
    }
}

/**
 * Function plays sound when user has found all matching cards unless audio.mute is true
 * */
function gameCompleteAudio() {
    if (audio.mute === true) {
        return;
    } else {
        audio.complete.play();
    }
}

/**
 * Function toggles sound on/off when user clicks volume icon in scoreboard area.
 * Function also changes the class of the audio icon so that the Font Awesome icon changes
 * */
function muteAudio() {
    let audioIcon = document.getElementById('audio-icon');
    if (audio.mute === false) {
        audioIcon.classList = ('fa-solid fa-volume-xmark');
        audio.mute = true;
        audio.cardFlip.muted = true;
        audio.cardMatch.muted = true;
        audio.cardNoMatch.muted = true;
        audio.gameOver.muted = true;
        audio.complete.muted = true;

    } else if (audio.mute === true) {
        audioIcon.classList = ('fa-solid fa-volume-high');
        audio.mute = false;
        audio.cardFlip.muted = false;
        audio.cardMatch.muted = false;
        audio.cardNoMatch.muted = false;
        audio.gameOver.muted = false;
        audio.complete.muted = false;
    }
}