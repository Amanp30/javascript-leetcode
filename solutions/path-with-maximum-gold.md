# Path with Maximum Gold

## 📝 Problem

You are given a grid representing a gold mine, where each cell contains a non-negative integer indicating the amount of gold in that cell, or zero if the cell is empty.

Your goal is to determine the maximum amount of gold you can collect under the following conditions:

1.  **Movement**: From your current position, you may move one step left, right, up, or down.
    
2.  **Cell Constraints**: You cannot visit the same cell more than once.
    
3.  **Gold Constraints**: You can only collect gold from cells containing a non-zero amount of gold.
    
4.  **Starting and Stopping**: You may start and stop collecting gold from any cell that contains gold.
    

To solve this problem, you need to return the maximum amount of gold that can be collected.


## 📌 Examples

### Example 1

**Input:** grid = [ [0, 6, 0], [5, 8, 7], [0, 9, 0] ]  
**Output:** 24

### Example 2

**Input:** grid = [ [1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20] ]  
**Output:** 28

---

## ✅ Solutions

### 💡 Solution 1: Depth-First Search (DFS) with Backtracking Approach

```javascript
function getMaximumGoldDFSBackTrack1(grid) {
    // Helper function to perform DFS
    function dfs(i, j) {
        // Check boundaries and if the cell is valid for exploration
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }

        // Collect gold from the current cell
        const gold = grid[i][j];
        grid[i][j] = 0; // Mark as visited

        // Explore all four directions
        const maxGold = Math.max(
            dfs(i + 1, j), // Down
            dfs(i - 1, j), // Up
            dfs(i, j + 1), // Right
            dfs(i, j - 1)  // Left
        );

        // Backtrack and restore the cell's original value
        grid[i][j] = gold;
        return gold + maxGold;
    }

    let maxGold = 0;

    // Iterate over all cells to find the starting points
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                maxGold = Math.max(maxGold, dfs(i, j));
            }
        }
    }

    return maxGold;
}
```

### 💡 Solution 2: Depth-First Search (DFS) with Backtracking Second

```javascript
function getMaximumGoldSecond(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxGold = 0;

    // Directions for moving in the grid (right, left, down, up)
    const directions = [
        [0, 1],  // Right
        [0, -1], // Left
        [1, 0],  // Down
        [-1, 0]  // Up
    ];

    function dfs(x, y, currentGold) {
        // Collect gold from the current cell
        const gold = grid[x][y];
        currentGold += gold;
        maxGold = Math.max(maxGold, currentGold);

        // Mark the cell as visited by setting it to 0
        grid[x][y] = 0;

        // Explore all four directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new position is within bounds and has gold
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] > 0) {
                dfs(newX, newY, currentGold);
            }
        }

        // Unmark the cell (backtrack) by restoring its original value
        grid[x][y] = gold;
    }

    // Try starting DFS from every cell with gold
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] > 0) {
                dfs(i, j, 0);
            }
        }
    }

    return maxGold;
}
```

### 💡 Solution 3: Depth-First Search (DFS) with State Restoration

```javascript
function getMaximumGoldStateRestore(grid) {
    // Helper function to perform DFS
    function dfs(i, j) {
        // Check boundaries and if the cell is valid for exploration
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }

        // Collect gold from the current cell
        const gold = grid[i][j];
        grid[i][j] = 0; // Mark as visited

        // Explore all four directions
        const maxGold = Math.max(
            dfs(i + 1, j), // Down
            dfs(i - 1, j), // Up
            dfs(i, j + 1), // Right
            dfs(i, j - 1)  // Left
        );

        // Backtrack and restore the cell's original value
        grid[i][j] = gold;
        return gold + maxGold;
    }

    let maxGold = 0;

    // Iterate over all cells to find the starting points
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                maxGold = Math.max(maxGold, dfs(i, j));
            }
        }
    }

    return maxGold;
}
```

### 💡 Solution 4: Iterative Depth-First Search (DFS) Approach to Find Maximum Gold in a Grid

```javascript
function getMaximumGoldIterative(grid) {
    let maxGold = 0;

    function dfs(i, j) {
        let maxGold = 0;
        let stack = [[i, j, 0, false]]; // [i, j, cur_sum, backtrack]
        let visited = new Set();
        
        while (stack.length > 0) {
            let [x, y, curSum, backtrack] = stack.pop();
            maxGold = Math.max(maxGold, curSum);

            if (backtrack) {
                visited.delete(`${x},${y}`);
                continue;
            }

            if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0 || visited.has(`${x},${y}`)) {
                continue;
            }

            stack.push([x, y, curSum, true]); // Mark as backtrack
            visited.add(`${x},${y}`);

            curSum += grid[x][y];

            stack.push([x + 1, y, curSum, false]); // Down
            stack.push([x - 1, y, curSum, false]); // Up
            stack.push([x, y + 1, curSum, false]); // Right
            stack.push([x, y - 1, curSum, false]); // Left
        }

        return maxGold;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                maxGold = Math.max(maxGold, dfs(i, j));
            }
        }
    }

    return maxGold;
}
```

### 💡 Solution 5: Heap PriorityQueue Solution - JavaScript

```javascript
function getMaximumGold(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxGold = 0;

    // Directions for moving in the grid (down, up, right, left)
    const directions = [
        [1, 0], // Down
        [-1, 0], // Up
        [0, 1], // Right
        [0, -1] // Left
    ];

    // Priority Queue using a max-heap
    const pq = new MaxHeap();

    // Add all cells with gold to the priority queue
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] > 0) {
                pq.add({ x: i, y: j, gold: grid[i][j] });
            }
        }
    }

    // Process each cell in the priority queue
    while (!pq.isEmpty()) {
        const { x, y } = pq.poll();
        maxGold = Math.max(maxGold, backtrack(grid, x, y));
    }

    return maxGold;

    function backtrack(grid, x, y) {
        const gold = grid[x][y];
        grid[x][y] = 0; // Mark this cell as visited

        let maxGold = 0;
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(grid, newX, newY) && grid[newX][newY] > 0) {
                maxGold = Math.max(maxGold, backtrack(grid, newX, newY));
            }
        }

        grid[x][y] = gold; // Unmark this cell for other paths
        return gold + maxGold;
    }

    function isValid(grid, x, y) {
        return x >= 0 && y >= 0 && x < rows && y < cols;
    }
}

// Priority Queue Implementation (Max-Heap)
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    add(element) {
        this.heap.push(element);
        this._heapifyUp();
    }

    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].gold <= this.heap[parentIndex].gold) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex].gold > this.heap[largest].gold) {
                largest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].gold > this.heap[largest].gold) {
                largest = rightChildIndex;
            }
            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}
```