let currentPlayer = "X";

$(document).ready(function() {
    $('.square').on('click', function() {
        if ($(this).text() == "") {
            $(this).text(currentPlayer);
            checkForWinner();
            togglePlayer();
        }
    });
});

function togglePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

function checkForWinner() {
    // Horizontal lines
    if ($('#1').text() == currentPlayer && $('#2').text() == currentPlayer && $('#3').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    } else if ($('#4').text() == currentPlayer && $('#5').text() == currentPlayer && $('#6').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    } else if ($('#7').text() == currentPlayer && $('#8').text() == currentPlayer && $('#9').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    // Vertical lines
    } else if ($('#1').text() == currentPlayer && $('#4').text() == currentPlayer && $('#7').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    } else if ($('#2').text() == currentPlayer && $('#5').text() == currentPlayer && $('#8').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    } else if ($('#3').text() == currentPlayer && $('#6').text() == currentPlayer && $('#9').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    // Diagonal lines
    } else if ($('#1').text() == currentPlayer && $('#5').text() == currentPlayer && $('#9').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    } else if ($('#3').text() == currentPlayer && $('#5').text() == currentPlayer && $('#7').text() == currentPlayer) {
        alert(currentPlayer + " Won!!");
    // Tie game
    } else if ($('#1').text() != "" && $('#2').text() != "" && $('#3').text() != "" && $('#4').text() != "" && $('#5').text() != "" && $('#6').text() != "" && $('#7').text() != "" && $('#8').text() != "" && $('#9').text() != "") {
        alert("Tie game!");
    }
}
