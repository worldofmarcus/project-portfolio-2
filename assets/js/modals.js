/** Show welcome modal when window loads */
$(window).on('load', function () {
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