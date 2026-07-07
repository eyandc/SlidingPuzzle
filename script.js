const board = document.getElementById("board");
const movesDisplay = document.getElementById("moves");
const difficulty = document.getElementById("difficulty");
const startBtn = document.getElementById("startBtn");
const playerName = document.getElementById("playerName");
const scoreTable = document.getElementById("scoreTable");
const scoreTitle = document.getElementById("scoreTitle");

let size = 3;
let tiles = [];
let moves = 0;
let currentLevel = "3x3";

// Load saved scores
let scores = JSON.parse(localStorage.getItem("puzzleScores")) || {
  "3x3": [],
  "4x4": [],
  "5x5": []
};

// Start game button
startBtn.addEventListener("click", () => {
  size = Number(difficulty.value);
  currentLevel = `${size}x${size}`;
  showScores(currentLevel);
  startGame();
});

// Update leaderboard when difficulty changes
difficulty.addEventListener("change", () => {
  currentLevel = `${difficulty.value}x${difficulty.value}`;
  showScores(currentLevel);
});

// Create new game
function startGame() {
  moves = 0;
  movesDisplay.textContent = moves;
  createTiles();
  shuffle();
  render();
}

// Create tiles
function createTiles() {
  tiles = [];

  for (let i = 1; i < size * size; i++) {
    tiles.push(i);
  }

  tiles.push(null);
}

// Shuffle board
function shuffle() {
  for (let i = 0; i < 300; i++) {
    const empty = tiles.indexOf(null);
    const possibleMoves = getNeighbours(empty);

    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    [tiles[empty], tiles[randomMove]] =
      [tiles[randomMove], tiles[empty]];
  }
}

// Display board
function render() {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  tiles.forEach((tile, index) => {
    const box = document.createElement("div");
    box.className = "tile";

    if (tile === null) {
      box.classList.add("empty");
    } else {
      box.textContent = tile;
      box.addEventListener("click", () => moveTile(index));
    }

    board.appendChild(box);
  });
}

// Move tile
function moveTile(index) {
  const empty = tiles.indexOf(null);

  if (getNeighbours(empty).includes(index)) {
    [tiles[index], tiles[empty]] =
      [tiles[empty], tiles[index]];

    moves++;
    movesDisplay.textContent = moves;

    render();
    checkWin();
  }
}

// Get valid moves
function getNeighbours(index) {
  const result = [];
  const row = Math.floor(index / size);
  const col = index % size;

  if (row > 0) result.push(index - size);
  if (row < size - 1) result.push(index + size);
  if (col > 0) result.push(index - 1);
  if (col < size - 1) result.push(index + 1);

  return result;
}

// Check completed puzzle
function checkWin() {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== i + 1) {
      return;
    }
  }

  saveScore();

  alert(`🎉 Puzzle Completed!\nMoves: ${moves}`);
}

// Save score
function saveScore() {
  let name = playerName.value.trim();

  if (name === "") {
    name = "Anonymous";
  }

  scores[currentLevel].push({
    name,
    moves
  });

  // Lowest moves first
  scores[currentLevel].sort((a, b) => a.moves - b.moves);

  // Keep top 10
  scores[currentLevel] = scores[currentLevel].slice(0, 10);

  localStorage.setItem(
    "puzzleScores",
    JSON.stringify(scores)
  );

  showScores(currentLevel);
}

// Display leaderboard
function showScores(level) {
  scoreTable.innerHTML = "";
  scoreTitle.textContent = `${level} Leaderboard`;

  if (scores[level].length === 0) {
    scoreTable.innerHTML =
      '<tr><td colspan="2">No records yet</td></tr>';
    return;
  }

  scores[level].forEach(player => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${player.name}</td>
      <td>${player.moves}</td>
    `;

    scoreTable.appendChild(row);
  });
}

// Initial load
showScores("3x3");
startGame();