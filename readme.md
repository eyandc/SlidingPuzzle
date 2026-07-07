# 🧩 Sliding Puzzle Game

A simple and interactive sliding puzzle web game built using **HTML, CSS, and JavaScript**.

Players can solve different puzzle sizes and compete for the best scores through a built-in leaderboard system.

Available difficulty levels:

- 🟢 Easy - 3x3
- 🟡 Medium - 4x4
- 🔴 Hard - 5x5

Each difficulty level has its own separate scoreboard where players can save their best results.

## 🚀 Features

- 🎮 Classic sliding puzzle gameplay
- 🔢 Multiple difficulty levels:
  - 3x3 Puzzle
  - 4x4 Puzzle
  - 5x5 Puzzle
- 👤 Player name input
- 🔀 Random puzzle shuffle
- 🧠 Automatic win detection
- 🔢 Move counter
- 🏆 Separate leaderboard per difficulty
- 💾 Score saving using LocalStorage
- 📊 Top 10 records for each level
- 🎨 Modern dark theme UI
- 📱 Responsive design for desktop and mobile

## 📁 Project Structure

```text
sliding-puzzle/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ How to Run

### Option 1: Open Directly

1. Download or clone the project.
2. Open:

```text
index.html
```

3. Run it using any modern browser.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Firefox

### Option 2: Using VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click:

```text
index.html
```

4. Select:

```text
Open with Live Server
```

## 🎮 How to Play

1. Enter your player name.

2. Select a difficulty level:

```text
Easy (3x3)
Medium (4x4)
Hard (5x5)
```

3. Click:

```text
Start Game
```

4. Move tiles by clicking tiles beside the empty space.

5. Arrange the tiles in the correct order:

```text
1  2  3
4  5  6
7  8  _
```

6. Complete the puzzle using the fewest moves possible.

## 🏆 Leaderboard System

The game automatically records completed puzzles.

The scoreboard changes automatically depending on the selected difficulty.

### 🟢 Easy (3x3)

```text
Name        Moves
Alex          20
John          35
Mike          50
```

### 🟡 Medium (4x4)

```text
Name        Moves
Sarah         80
Alex          95
```

### 🔴 Hard (5x5)

```text
Name        Moves
Chris        150
Mark         200
```

Leaderboard features:

- Each difficulty has its own ranking
- Lower moves rank higher
- Top 10 scores are saved
- Scores remain after closing the browser

## 🧠 How It Works

- The puzzle board is stored using a JavaScript array.
- Each tile contains a number value.
- The empty space is represented using `null`.
- Players can only move tiles beside the empty space.
- Every move updates the move counter.
- The game checks the board after every move.
- Completed puzzles automatically save the player's score.

## 🛠️ Built With

### Frontend

- HTML5
- CSS3
  - Flexbox
  - CSS Grid
  - Responsive Design
- JavaScript
  - DOM Manipulation
  - Event Handling
  - LocalStorage

## 📌 Future Improvements

Possible future features:

- ⏱️ Timer system
- 🥇 Gold, Silver, Bronze rankings
- 🎵 Sound effects
- ✨ Smooth tile animations
- 📱 Mobile swipe controls
- 🌙 Multiple themes
- 🔥 Daily puzzle challenge
- ☁️ Online leaderboard system
- 👥 Multiplayer mode

## 📷 Preview

Solved puzzle example:

```text
1  2  3
4  5  6
7  8  _
```

## 👨‍💻 Author

Built as a beginner-friendly JavaScript project for learning:

- DOM manipulation
- Game logic
- UI development
- Browser storage
- Interactive web applications