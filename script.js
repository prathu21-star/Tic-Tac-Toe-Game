let player1 = 'Player 1';
let player2 = 'Player 2';
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameStarted = false;

function startGame() {
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');

  player1 = player1Input.value || 'Player 1';
  player2 = player2Input.value || 'Player 2';

  player1Input.disabled = true;
  player2Input.disabled = true;
  document.getElementById('reset-btn').style.display = 'block';

  isGameStarted = true;
}

function makeMove(cellIndex) {
  if (isGameStarted && gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;

    if (checkWin()) {
      document.getElementById('board').classList.add('game-over');
      setTimeout(() => {
        const winner = currentPlayer === 'X' ? player1 : player2;
        alert('Player ' + winner + ' wins!');
        resetGame();
      }, 500);
    } else if (checkDraw()) {
      document.getElementById('board').classList.add('game-over');
      setTimeout(() => {
        alert('It\'s a draw!');
        resetGame();
      }, 500);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

function resetGame() {
  player1 = 'Player 1';
  player2 = 'Player 2';
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  isGameStarted = false;

  document.getElementById('player1').value = '';
  document.getElementById('player2').value = '';
  document.getElementById('player1').disabled = false;
  document.getElementById('player2').disabled = false;
  document.getElementById('reset-btn').style.display = 'none';
  document.getElementById('board').classList.remove('game-over');

  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.textContent = '';
  }
}
