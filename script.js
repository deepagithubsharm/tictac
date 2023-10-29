let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (gameOver || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    document.getElementsByClassName('cell')[index].classList.add(currentPlayer);
    
    if (checkWinner(currentPlayer)) {
        document.getElementById('status').innerText = `Player ${currentPlayer} Wins!`;
        gameOver = true;
    } else if (board.indexOf('') === -1) {
        document.getElementById('status').innerText = "It's a Draw!";
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').innerText = `Player ${currentPlayer}'s Turn`;
    }
}

function checkWinner(player) {
    for (const combo of winningCombinations) {
        if (board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].classList.remove('X', 'O');
    }

    document.getElementById('status').innerText = "Player X's Turn";
}

resetBoard();
