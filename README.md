# Tic Tac Toe Game

This is a basic implementation of the Tic Tac Toe game using HTML, CSS, and JavaScript.

## How to Play

1. Enter the names of Player 1 and Player 2 in the input fields provided.
2. Click the "Start Game" button to begin the game.
3. Player 1 will play as "X" and Player 2 will play as "O".
4. Click on any cell in the grid to make a move.
5. The first player to form a horizontal, vertical, or diagonal line with their respective symbol wins the game.
6. If all cells are filled and no player has won, the game ends in a draw.
7. After the game ends, click the "Reset" button to start a new game.

Enjoy playing Tic Tac Toe!

## Screenshot

![Screenshot 2023-06-24 192542](https://github.com/prathu21-star/Tic-Tac-Toe-Game/assets/91003319/a3b91c37-4533-4d71-a86f-495f83d716c5)
![Screenshot 2023-06-24 192604](https://github.com/prathu21-star/Tic-Tac-Toe-Game/assets/91003319/d214f757-9471-4da1-a065-9169139c9c90)




## Development

To run the game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/prathu21-star/tic-tac-toe.git`
2. Navigate to the project directory: `cd tic-tac-toe`
3. Open the `index.html` file in your preferred web browser.

## Algorithm

Certainly! Here's an explanation of the JavaScript algorithm used in the Tic Tac Toe game:

1. **Variables and Game Initialization**: The game begins by initializing variables such as `player1` and `player2` to store the player names, `currentPlayer` to track the current player ('X' or 'O'), `gameBoard` to represent the state of the game board, and `isGameStarted` to track whether the game has started.

2. **startGame() Function**: When the "Start Game" button is clicked, the `startGame()` function is called. This function retrieves the player names entered in the input fields and updates the `player1` and `player2` variables accordingly. It also disables the input fields and displays the "Reset" button, indicating that the game has started.

3. **makeMove() Function**: When a cell on the game board is clicked, the `makeMove()` function is invoked. It checks if the game has started and if the clicked cell is empty. If these conditions are met, it updates the `gameBoard` array with the current player's symbol ('X' or 'O') and updates the text content of the clicked cell. Then, it checks for a win or a draw by calling the `checkWin()` and `checkDraw()` functions.

4. **checkWin() Function**: The `checkWin()` function checks for a winning condition on the game board. It defines an array `winningCombos` that represents all possible winning combinations. It iterates over each combination and checks if the cells in that combination are all filled with the same symbol (either 'X' or 'O'). If a winning combination is found, the function returns `true`, indicating a win.

5. **checkDraw() Function**: The `checkDraw()` function checks for a draw condition on the game board. It uses the `every()` method to iterate over each cell in the `gameBoard` array and checks if all cells are filled. If all cells are filled and no winning combination is found, the function returns `true`, indicating a draw.

6. **Handling Game End**: If a win or a draw is detected, the game board is disabled by adding the "game-over" class to the board. After a short delay (500ms), a pop-up message is displayed using `alert()`. If a win is detected, the message displays "Player X wins!" or "Player O wins!" depending on the current player. If it's a draw, the message displays "It's a draw!". After the pop-up is closed, the `resetGame()` function is called to reset the game.

7. **resetGame() Function**: The `resetGame()` function resets all game-related variables, clears the game board, and enables the player name input fields. It also removes the "game-over" class from the game board to enable further moves.

This algorithm ensures that the game progresses correctly, checks for wins or draws, and provides a way to reset the game for a new round.

## License

This project is licensed under the [MIT License](LICENSE).
