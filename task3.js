

const cells = Array.from(document.querySelectorAll('.cell'));
const resetBtn = document.getElementById('reset-button');
let currentPlayer = 'X';


const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];


function startGame() {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.disabled = false;
    cell.addEventListener('click', handleClick, { once: true });
  });
  currentPlayer = 'X';
}


function handleClick(e) {
  const cell = e.target;
  cell.innerText = currentPlayer;
  cell.disabled = true;
  if (checkWinner()) {
    setTimeout(() => alert(`🎉 Player ${currentPlayer} wins!`), 100);
    endGame();
  } else if (isDraw()) {
    setTimeout(() => alert("It's a draw!"), 100);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}


function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return (
      cells[a].innerText &&
      cells[a].innerText === cells[b].innerText &&
      cells[b].innerText === cells[c].innerText
    );
  });
}

// Check for a draw
function isDraw() {
  return cells.every(cell => cell.innerText);
}


function endGame() {
  cells.forEach(cell => cell.disabled = true);
}

resetBtn.addEventListener('click', startGame);


startGame();
