# Find Winner on a Tic Tac Toe Game

## 📝 Problem

Tic-Tac-Toe is a strategic game played on a 3x3 grid between two players, A and B. The rules are as follows:

1.  **Players**:
    
    *   Player A uses the symbol 'X'.
        
    *   Player B uses the symbol 'O'.
        
2.  **Gameplay**:
    
    *   Players alternate turns, placing their symbols in unoccupied squares on the grid.
        
    *   Moves can only be made in empty squares.
        
3.  **Winning Conditions**:
    
    *   The game concludes when one player achieves three of their symbols in a row—either horizontally, vertically, or diagonally.
        
    *   If all squares are filled without a winner, the game ends in a draw.
        
4.  **Game States**:
    
    *   **Winner**: Return 'A' if player A wins, or 'B' if player B wins.
        
    *   **Draw**: Return "Draw" if the game ends with no available moves and no winner has been determined.
        
    *   **Pending**: Return "Pending" if there are still moves left to be played and no winner has emerged.
        

### Input:

*   A 2D integer array `moves`, where `moves[i] = [rowi, coli]` specifies the position of the ith move on the grid.
    

### Assumptions:

*   The moves are valid and adhere to the rules of Tic-Tac-Toe.
    
*   The grid starts empty, and player A always plays first.


## 📌 Examples

### Example 1

**Input:** moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]  
**Output:** "A"

### Example 2

**Input:** moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]  
**Output:** "B"

### Example 3

**Input:** moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]  
**Output:** "Draw"

---

## ✅ Solutions

### 💡 Solution 1: Winning Strategies for Tic-Tac-Toe: A Grid-Based Approach

```javascript
function determineTicTacToeWinnerGridApproach (playerMoves) {
    let gameBoard = new Array(3).fill().map(() => Array(3).fill(null));

    for (let i = 0; i < playerMoves.length; i += 2) {
        gameBoard[playerMoves[i][0]][playerMoves[i][1]] = "A"; // Player A's move
    }

    for (let i = 1; i < playerMoves.length; i += 2) {
        gameBoard[playerMoves[i][0]][playerMoves[i][1]] = "B"; // Player B's move
    }

    // Check rows for a winner
    for (let row = 0; row < 3; row++) {
        if (gameBoard[row][0] != null && 
            gameBoard[row][0] === gameBoard[row][1] && 
            gameBoard[row][0] === gameBoard[row][2]) {
            return gameBoard[row][0];
        }
    }

    // Check columns for a winner
    for (let col = 0; col < 3; col++) {
        if (gameBoard[0][col] != null && 
            gameBoard[0][col] === gameBoard[1][col] && 
            gameBoard[0][col] === gameBoard[2][col]) {
            return gameBoard[0][col];
        }
    }

    // Check diagonals for a winner
    if (gameBoard[0][0] != null && 
        gameBoard[0][0] === gameBoard[1][1] && 
        gameBoard[0][0] === gameBoard[2][2]) {
        return gameBoard[0][0];
    }
    
    if (gameBoard[2][0] != null && 
        gameBoard[2][0] === gameBoard[1][1] && 
        gameBoard[2][0] === gameBoard[0][2]) {
        return gameBoard[2][0];
    }

    // Check for draw or pending
    if (playerMoves.length === 9) {
        return "Draw";
    }

    return "Pending";
};
```

### 💡 Solution 2: Using a Hash Map

```javascript
function findTicTacToeWinnerUsingHashMap(moves) {
    const board = Array(3).fill(null).map(() => Array(3).fill(''));
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]], // row 1
        [[1, 0], [1, 1], [1, 2]], // row 2
        [[2, 0], [2, 1], [2, 2]], // row 3
        [[0, 0], [1, 0], [2, 0]], // col 1
        [[0, 1], [1, 1], [2, 1]], // col 2
        [[0, 2], [1, 2], [2, 2]], // col 3
        [[0, 0], [1, 1], [2, 2]], // diagonal \
        [[0, 2], [1, 1], [2, 0]], // diagonal /
    ];

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        board[row][col] = i % 2 === 0 ? 'A' : 'B'; // 'A' for player A, 'B' for player B
    }

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
            return board[a[0]][a[1]];
        }
    }

    return moves.length === 9 ? 'Draw' : 'Pending';
}
```

### 💡 Solution 3: Using another grid based approach

```javascript
function determineTicTacToeOutcomeGridBasedTwo (playerMoves) {
    const playerXMoves = [];
    const playerOMoves = [];

    function checkRows(moves) {
        const rowCounts = [0, 0, 0];
        moves.forEach(([row, col]) => {
            rowCounts[row]++;
        });
        return rowCounts.includes(3);
    }

    function checkColumns(moves) {
        const colCounts = [0, 0, 0];
        moves.forEach(([row, col]) => {
            colCounts[col]++;
        });
        return colCounts.includes(3);
    }

    function checkDiagonals(moves) {
        let leftDiagonalCount = 0, rightDiagonalCount = 0;
        moves.forEach(([row, col]) => {
            if (row === col) leftDiagonalCount++;
            if (row + col === 2) rightDiagonalCount++;
        });
        return leftDiagonalCount === 3 || rightDiagonalCount === 3;
    }

    for (let i = 0; i < playerMoves.length; i++) {
        if (i % 2 === 0) playerXMoves.push(playerMoves[i]); // Player A (X)
        else playerOMoves.push(playerMoves[i]); // Player B (O)
    }

    if (checkRows(playerXMoves) || checkColumns(playerXMoves) || checkDiagonals(playerXMoves)) return 'A';
    if (checkRows(playerOMoves) || checkColumns(playerOMoves) || checkDiagonals(playerOMoves)) return 'B';

    if (playerMoves.length === 9) return 'Draw';
    return 'Pending';
};
```

### 💡 Solution 4: Using another grid based approach

```javascript
function determineTicTacToeOutcomeGridThree (moves) {
    let gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];

    function checkWinner(currentPlayer) {
        // Horizontal Check
        for (let row = 0; row < 3; row++) {
            if (gameBoard[row].every(cell => cell === currentPlayer)) {
                return currentPlayer;
            }
        }

        // Vertical Check
        for (let col = 0; col < 3; col++) {
            if (gameBoard.every(row => row[col] === currentPlayer)) {
                return currentPlayer;
            }
        }

        // Diagonal Check (Left to Right)
        if (gameBoard[0][0] === currentPlayer && 
            gameBoard[1][1] === currentPlayer && 
            gameBoard[2][2] === currentPlayer) {
            return currentPlayer;
        }

        // Diagonal Check (Right to Left)
        if (gameBoard[0][2] === currentPlayer && 
            gameBoard[1][1] === currentPlayer && 
            gameBoard[2][0] === currentPlayer) {
            return currentPlayer;
        }

        return null; // No winner yet
    }

    let moveCount = 0;
    let currentPlayer = "O";

    for (let i = 0; i < moves.length; i++) {
        moveCount++;
        currentPlayer = currentPlayer === "O" ? "X" : "O"; // Alternate players
        const [row, col] = moves[i];
        gameBoard[row][col] = currentPlayer;

        const winner = checkWinner(currentPlayer);
        if (winner) {
            return winner === "X" ? "A" : "B"; // Return winner
        }

        if (moveCount === 9) {
            return "Draw"; // All moves played
        }
    }

    return "Pending"; // Game still ongoing
};
```

### 💡 Solution 5: Evaluating Tic-Tac-Toe Outcomes Using Geometric Principles

```javascript
function ticTacToeGeometricApproach(playerMoves) {
    const totalMoves = playerMoves.length;

    for (let start = 0; start < 2; start++) {
        const currentWinner = start === 0 ? "A" : "B";
        
        for (let i = start; i < totalMoves; i += 2) {
            const [firstMoveRow, firstMoveCol] = playerMoves[i];
            
            for (let j = i + 2; j < totalMoves; j += 2) {
                const [secondMoveRow, secondMoveCol] = playerMoves[j];
                
                for (let k = j + 2; k < totalMoves; k += 2) {
                    const [thirdMoveRow, thirdMoveCol] = playerMoves[k];

                    // Check if the three moves are collinear
                    if ((firstMoveRow - secondMoveRow) * (firstMoveCol - thirdMoveCol) === 
                        (firstMoveRow - thirdMoveRow) * (firstMoveCol - secondMoveCol)) {
                        return currentWinner;
                    }
                }
            }
        }
    }

    return totalMoves === 9 ? "Draw" : "Pending";
};
```

### 💡 Solution 6: Efficient Winner Detection in Tic-Tac-Toe Using 1D Array Representation

```javascript
function ticTacToeArrayApproach(moves) {
    const GOAL_STATES = [  // 8 possible winning combinations
        [0, 1, 2],  // top row
        [3, 4, 5],  // middle row
        [6, 7, 8],  // bottom row
        [0, 3, 6],  // left column
        [1, 4, 7],  // middle column
        [2, 5, 8],  // right column
        [0, 4, 8],  // diagonal
        [2, 4, 6],  // diagonal
    ];

    const boardState = Array(9).fill(0); // Represents the board state
    let currentPlayer = 1; // 1 for Player A, -1 for Player B

    for (const move of moves) {
        const [x, y] = move;
        boardState[x + 3 * y] = currentPlayer; // Update board state
        currentPlayer = -currentPlayer; // Switch players
    }

    // Check for a winner
    for (const player of [-1, 1]) {
        for (const combo of GOAL_STATES) {
            if (combo.every(index => boardState[index] === player)) {
                return player === 1 ? "A" : "B"; // Return winner
            }
        }
    }

    // Check for a draw or pending state
    return boardState.includes(0) ? "Pending" : "Draw";
};
```

### 💡 Solution 7: Tic-Tac-Toe using Breadth-First Search (BFS)

```javascript
function tictactoeUsingBFS(moves) {
  function vertical(x, y) {
    if (y + 1 <= 2) {
      return [[x, y + 1]];
    }
    return [];
  }

  function horizontal(x, y) {
    if (x + 1 <= 2) {
      return [[x + 1, y]];
    }
    return [];
  }

  function diagonal1(x, y) {
    if (x + 1 <= 2 && y + 1 <= 2) {
      return [[x + 1, y + 1]];
    }
    return [];
  }

  function diagonal2(x, y) {
    if (x - 1 >= 0 && y + 1 <= 2) {
      return [[x - 1, y + 1]];
    }
    return [];
  }

  function bfs(moveFunc) {
    const seen = new Set();

    for (const [y, x] of moves) {
      if (seen.has(`${x},${y}`)) continue;

      if (x > 0 && y > 0) continue;

      const q = [[x, y]];
      seen.add(`${x},${y}`);

      const player = graph[y][x];

      let level = 0;

      while (q.length) {
        for (let i = 0; i < q.length; i++) {
          const [curX, curY] = q.shift();

          for (const [xp, yp] of moveFunc(curX, curY)) {
            if (graph[yp][xp] === player && !seen.has(`${xp},${yp}`)) {
              seen.add(`${xp},${yp}`);
              q.push([xp, yp]);
            }
          }
        }

        level++;
      }

      if (level === 3) {
        return player;
      }
    }
  }

  const graph = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  for (let i = 0; i < moves.length; i++) {
    const [y, x] = moves[i];
    graph[y][x] = i % 2 === 0 ? 'A' : 'B';
  }

  moves.sort();

  return bfs(vertical) || bfs(horizontal) || bfs(diagonal1) || bfs(diagonal2) || (moves.length < 9 ? "Pending" : "Draw");
}
```