# tic-tac-toe
📌 Tic-Tac-Toe Game 🚀 My First JavaScript Project 📁 Technologies Used HTML for structure 🏗️ CSS for styling 🎨 JavaScript for game logic 🧠 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe ReadMe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #272d2d;
            color: #b8c5d6;
            padding: 20px;
            text-align: center;
        }
        h1, h2 {
            color: #23ce6b;
        }
        pre {
            background: #1e1e1e;
            color: #23ce6b;
            padding: 10px;
            border-radius: 5px;
            text-align: left;
            overflow-x: auto;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎲 Tic-Tac-Toe Game</h1>
        <p>A simple Tic-Tac-Toe game built using <b>HTML, CSS, and JavaScript</b>. This project allows two players to play the classic Tic-Tac-Toe game in the browser. ✨</p>
        
        <h2>🚀 Features</h2>
        <ul>
            <li>👥 Two-player mode (X and O alternate turns)</li>
            <li>🏆 Winning combinations detection</li>
            <li>🤝 Draw detection</li>
            <li>🔄 Restart and New Game buttons</li>
            <li>📱 Responsive design</li>
        </ul>
        
        <h2>🛠️ Technologies Used</h2>
        <ul>
            <li>📝 <b>HTML</b>: For structuring the game interface.</li>
            <li>🎨 <b>CSS</b>: For styling and layout.</li>
            <li>⚙️ <b>JavaScript</b>: For game logic and interactions.</li>
        </ul>
        
        <h2>🎮 How to Play</h2>
        <ol>
            <li>🎭 The game starts with <b>Player O</b> by default.</li>
            <li>🔄 Players take turns clicking on an empty box to place their symbol (O or X).</li>
            <li>✅ The game checks for a winner after every move:</li>
            <ul>
                <li>🏅 If a player gets three of their marks in a row (horizontally, vertically, or diagonally), they win.</li>
                <li>❌ If all boxes are filled and no player wins, the game ends in a draw.</li>
            </ul>
            <li>📢 A message is displayed when there is a winner or a draw.</li>
            <li>🔁 Click <b>New Game</b> or <b>Restart Game</b> to play again.</li>
        </ol>
        
        <h2>📥 Installation</h2>
        <pre>
            git clone https://github.com/your-username/tic-tac-toe.git
            cd tic-tac-toe
            Open index.html in a web browser
        </pre>
        
        <h2>📂 File Structure</h2>
        <pre>
📂 tic-tac-toe
├── 📄 index.html  # Main HTML file
├── 🎨 style.css   # Styling for the game
├── ⚙️ app.js      # JavaScript game logic
        </pre>
        
        <h2>🧠 Game Logic Overview</h2>
        <ul>
            <li>🔄 The game tracks turns using <b>turnO</b> (true for O, false for X).</li>
            <li>🎯 Each move updates the game board and checks for a winner.</li>
            <li>🏆 The <b>checkWinner</b> function verifies all possible winning combinations.</li>
            <li>🤝 The <b>gameDraw</b> function checks if the game is a draw.</li>
            <li>🔁 The <b>resetGame</b> function resets the board and game state.</li>
        </ul>
        
        <h2>🌍 Demo</h2>
        <p>You can check out a live demo of the game <a href="https://your-live-demo-url.com">here</a> (if hosted online). 🎥</p>
        
        <h2>🤝 Contributing</h2>
        <p>Feel free to fork this repository and contribute by submitting pull requests. Suggestions and improvements are always welcome! 💡</p>
        
        <h3>Happy coding! 🎮🚀</h3>
    </div>
</body>
</html>

