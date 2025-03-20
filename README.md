# tic-tac-toe
📌 Tic-Tac-Toe Game 🚀 My First JavaScript Project 📁 Technologies Used HTML for structure 🏗️ CSS for styling 🎨 JavaScript for game logic 🧠 

# 🎲 Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built using **HTML, CSS, and JavaScript**. This project allows two players to play the classic Tic-Tac-Toe game in the browser. ✨

## 🚀 Features
- 👥 Two-player mode (X and O alternate turns)
- 🏆 Winning combinations detection
- 🤝 Draw detection
- 🔄 Restart and New Game buttons
- 📱 Responsive design

## 🛠️ Technologies Used
- 📝 **HTML**: For structuring the game interface.
- 🎨 **CSS**: For styling and layout.
- ⚙️ **JavaScript**: For game logic and interactions.

## 🎮 How to Play
1. 🎭 The game starts with **Player O** by default.
2. 🔄 Players take turns clicking on an empty box to place their symbol (O or X).
3. ✅ The game checks for a winner after every move:
   - 🏅 If a player gets three of their marks in a row (horizontally, vertically, or diagonally), they win.
   - ❌ If all boxes are filled and no player wins, the game ends in a draw.
4. 📢 A message is displayed when there is a winner or a draw.
5. 🔁 Click **New Game** or **Restart Game** to play again.

## 📥 Installation
```sh
git clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe
Open index.html in a web browser
```

## 📂 File Structure
```
📂 tic-tac-toe
├── 📄 index.html  # Main HTML file
├── 🎨 style.css   # Styling for the game
├── ⚙️ app.js      # JavaScript game logic
```

## 🧠 Game Logic Overview
- 🔄 The game tracks turns using **turnO** (true for O, false for X).
- 🎯 Each move updates the game board and checks for a winner.
- 🏆 The **checkWinner** function verifies all possible winning combinations.
- 🤝 The **gameDraw** function checks if the game is a draw.
- 🔁 The **resetGame** function resets the board and game state.

## 🌍 Demo
You can check out a live demo of the game [here](https://your-live-demo-url.com) (if hosted online). 🎥

## 🤝 Contributing
Feel free to fork this repository and contribute by submitting pull requests. Suggestions and improvements are always welcome! 💡

### Happy coding! 🎮🚀

