# 🧩 Sliding Puzzle Game

A simple 3×3 sliding puzzle web app built with HTML, CSS, and JavaScript.  
Click tiles next to the empty space to arrange them in order from 1 to 8.

## 🚀 Features
- 🎮 Classic 8-puzzle gameplay (3×3 grid)
- 🔀 Shuffle button (always solvable)
- 🔢 Move counter
- 🧠 Win detection
- 🎨 Clean dark UI
- 🖱️ Click-to-move controls

## 📁 Project Structure
sliding-puzzle/
│── index.html
│── style.css
│── script.js
│── README.md

## ▶️ How to Run
Option 1: Open index.html directly in any browser

Option 2:
1. Open folder in VS Code
2. Install Live Server extension
3. Right-click index.html
4. Click “Open with Live Server”

## 🎮 How to Play
Click Shuffle  
Move tiles by clicking numbers next to the empty space  

Arrange tiles in order:
1 2 3  
4 5 6  
7 8 _  

Try to solve it in as few moves as possible!

## 🧠 How It Works
- Board is stored as a 1D array  
- null represents the empty tile  
- Only adjacent tiles can move into the empty space  
- Shuffle uses valid random moves to ensure solvability  

## 🛠️ Built With
HTML5  
CSS3 (Flexbox + Grid)  
Vanilla JavaScript  

## 📌 Future Improvements
- ⏱️ Timer system  
- 🏆 Best score saving (localStorage)  
- 🔢 4×4 / 5×5 modes  
- 📱 Mobile swipe controls  
- ✨ Smooth animations  

## 📷 Preview
1 2 3  
4 5 6  
7 8 _  

## 👨‍💻 Author
Built as a beginner-friendly JavaScript project for learning DOM manipulation and game logic.