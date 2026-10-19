document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const state = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    squares.forEach(function(square, index) {
        square.classList.add("square");
        square.addEventListener("click", function() {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            state[index] = currentPlayer;

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });
});