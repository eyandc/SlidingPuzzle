const board = document.getElementById("board");
const shuffleBtn = document.getElementById("shuffleBtn");
const movesText = document.getElementById("moves");

const size = 3;

let tiles = [];
let moves = 0;

// start game
function init() {
  tiles = [];

  for (let i = 1; i < size * size; i++) {
    tiles.push(i);
  }

  tiles.push(null);

  moves = 0;
  render();
}

// render board
function render() {
  board.innerHTML = "";

  tiles.forEach((value, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    if (value === null) {
      tile.classList.add("empty");
    } else {
      tile.textContent = value;
      tile.onclick = () => moveTile(index);
    }

    board.appendChild(tile);
  });

  movesText.textContent = "Moves: " + moves;
}

// find empty tile
function emptyIndex() {
  return tiles.indexOf(null);
}

// check adjacency
function isAdjacent(a, b) {
  const ax = a % size;
  const ay = Math.floor(a / size);
  const bx = b % size;
  const by = Math.floor(b / size);

  return Math.abs(ax - bx) + Math.abs(ay - by) === 1;
}

// move tile
function moveTile(index) {
  const empty = emptyIndex();

  if (isAdjacent(index, empty)) {
    [tiles[index], tiles[empty]] = [tiles[empty], tiles[index]];
    moves++;
    render();
    checkWin();
  }
}

// shuffle (safe solvable shuffle)
function shuffle() {
  for (let i = 0; i < 200; i++) {
    const empty = emptyIndex();

    const neighbors = tiles
      .map((_, i) => i)
      .filter(i => isAdjacent(i, empty));

    const random = neighbors[Math.floor(Math.random() * neighbors.length)];

    if (random !== undefined) {
      moveTile(random);
    }
  }

  moves = 0;
  render();
}

// win check
function checkWin() {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== i + 1) return;
  }

  setTimeout(() => alert("You solved it! 🎉"), 100);
}

// events
shuffleBtn.addEventListener("click", shuffle);

// start
init();