/** Show welcome modal when window loads
 * Taken from https://stackoverflow.com/questions/10233550/launch-bootstrap-modal-on-page-load
 */

$(window).on('load', function () {
    generateCards();
    $('#welcome-modal').modal('show');

});

/** This function closes all modals when called */
function closeModals() {
    $('#welcome-modal').modal('hide');
    $('#game-over-modal').modal('hide');
    $('#congratulations-modal').modal('hide');
}

/** This function shows the gameoverModal when check has been made that user has no more tries */
function gameoverModal() {
    $('#game-over-modal').modal('show');
}

/** This function shows the congratulationsModal when check has been made that user has found all pair of cards */
function congratulationsModal() {
    $('#congratulations-modal').modal('show');
}

/** This function shows the welcomeModal when user chooses that option in game over and congratulation modal or
 * when user press the 'i'-icon in the scoreboard area
 */
function welcomeModal() {
    $('#welcome-modal').modal('show');
}