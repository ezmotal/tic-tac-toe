let boxes = document.querySelectorAll(".box"); // Select all boxes
let resetBtn = document.querySelector("#reset-btn"); // Select the reset button
let newGameBtn = document.querySelector("#new-btn"); // Select the new game button
let msgContainer = document.querySelector(".msg-container"); // Select the message container
let msg = document.querySelector("#msg"); // Select the message element

let turnO = true; // Player X , player O
let count = 0; // to track draws

const winningCombination = [
  // All possible winning combinations
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  // Function to reset the game
  turnO = true; // Set the first player to O
  count = 0; // Reset the move count
  boxes.forEach((box) => {
    box.innerText = ""; // Clear the text content of each box
    box.disabled = false; // Enable all boxes
  });
  msgContainer.classList.add("hide"); // Hide the message container
};

boxes.forEach((box) => {
  // Add click event listener to each box
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O"; //player O turn
      box.style.color = "#0D4715"; // Set color for O (white)
      turnO = false;
    } else {
      box.innerHTML = "X"; // Player X turn
      box.style.color = "#E9762B"; // Set color for X (blue)
      turnO = true;
    }
    box.disabled = true; // Disable the box after clickS
    count++; // Increase the move count

    checkWinner(); // Check if there is a winner after each turn
    if (count === 9) {
      // Check if all boxes are filled and there is no winner
      gameDraw(); // Call the gameDraw function
    }
  });
});

const showWinner = (winner) => {
  // Function to display the winner
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes(); // Disable all boxes after a winner is found
};
const disableBoxes = () => {
  // Function to disable all boxes
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  // Corrected to enableBoxes
  // Function to enable all boxes
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Function to check if there is a winner by comparing the current state of the boxes
// with the predefined winning combinations. Logs the indices of the winning combination.
const checkWinner = () => {
  for (let combination of winningCombination) {
    // Loop through all winning combinations
    let pos1val = boxes[combination[0]].innerText;
    let pos2val = boxes[combination[1]].innerText;
    let pos3val = boxes[combination[2]].innerText;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // Check if all values in the winning combination are the same
        console.log("Winner", pos1val); // Log the winner
        showWinner(pos1val); // Display the winner
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame); // Corrected to call resetGame
resetBtn.addEventListener("click", resetGame); // Corrected to call resetGame

