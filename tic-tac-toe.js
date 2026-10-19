document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");
    const originalMessage = statusDiv.textContent;
    const state = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]              // diagonals
    ];

    function checkWinner() {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (state[a] !== "" && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    squares.forEach(function(square, index) {
        square.classList.add("square");

        square.addEventListener("click", function() {
            if (state[index] !== "" || checkWinner()) {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            state[index] = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                statusDiv.classList.add("you-won");
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });

    newGameBtn.addEventListener("click", function() {
        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        state.fill("");
        currentPlayer = "X";

        statusDiv.textContent = originalMessage;
        statusDiv.classList.remove("you-won");
    });
});