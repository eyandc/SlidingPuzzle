import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Existing elements
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

// Start game
startBtn.addEventListener("click", () => {
    size = Number(difficulty.value);
    currentLevel = `${size}x${size}`;

    showScores(currentLevel);
    startGame();
});

// Change difficulty
difficulty.addEventListener("change", () => {
    currentLevel = `${difficulty.value}x${difficulty.value}`;
    showScores(currentLevel);
});

// Start puzzle
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

// Shuffle
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

// Render board
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

// Neighbours
function getNeighbours(index) {
    const result = [];

    const row = Math.floor(index / size);
    const col = index % size;

    if (row > 0)
        result.push(index - size);

    if (row < size - 1)
        result.push(index + size);

    if (col > 0)
        result.push(index - 1);

    if (col < size - 1)
        result.push(index + 1);

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

// Save score to Firebase
async function saveScore() {
    let name = playerName.value.trim();

    if (name === "") {
        name = "Anonymous";
    }

    await addDoc(collection(db, "scores"), {
        name: name,
        moves: moves,
        level: currentLevel,
        createdAt: serverTimestamp()
    });

    showScores(currentLevel);
}

// Load leaderboard
async function showScores(level) {
    scoreTable.innerHTML = "";
    scoreTitle.textContent = `${level} Leaderboard`;

    const q = query(
        collection(db, "scores"),
        orderBy("moves"),
        limit(10)
    );

    const snapshot = await getDocs(q);

    let hasData = false;

    snapshot.forEach((doc) => {
        const player = doc.data();

        if (player.level === level) {
            hasData = true;

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.moves}</td>
            `;

            scoreTable.appendChild(row);
        }
    });

    if (!hasData) {
        scoreTable.innerHTML = "No records yet";
    }
}

// Initial load
showScores("3x3");
startGame();