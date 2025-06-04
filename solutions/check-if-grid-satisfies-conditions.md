#  Check if Grid Satisfies Conditions

## 📝 Problem

You are provided with a 2D matrix called `grid`, which has dimensions `m x n`. Each cell in this matrix contains an integer value. Your task is to determine if this grid adheres to two specific conditions:

1.  **Vertical Equality Condition:** Every cell in the grid should be equal to the cell directly below it (if such a cell exists). Formally, for each cell `grid[i][j]`, it must be that `grid[i][j] == grid[i + 1][j]`, provided `i + 1` is within the bounds of the matrix. This means that each cell's value should match the value of the cell immediately below it in the same column, wherever such a cell exists.
    
2.  **Horizontal Difference Condition:** Each cell in the grid should be different from the cell directly to its right (if such a cell exists). In other words, for each cell `grid[i][j]`, it must be that `grid[i][j] != grid[i][j + 1]`, provided `j + 1` is within the bounds of the matrix. This ensures that each cell's value is distinct from the value of the cell immediately to its right, wherever such a cell exists.
    

Your goal is to implement a function that checks if these conditions are satisfied for the entire grid. If every cell meets both conditions, the function should return `true`. If any cell fails to meet either condition, the function should return `false`.


## 📌 Examples

### Example 1

**Input:** grid = [[1,0,2],[1,0,2]]  
**Output:** true

### Example 2

**Input:** grid = [[1,1,1],[0,0,0]]  
**Output:** false

### Example 3

**Input:** grid = [[1],[2],[3]]  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Basic Iteration Approach

```javascript
function checkGridBasic(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) return false;
            if (j < n - 1 && grid[i][j] === grid[i][j + 1]) return false;
        }
    }
    
    return true;
}
```

### 💡 Solution 2: Using a Helper Function

```javascript
function checkGridHelper(grid) {
    function isValid(i, j) {
        if (i < grid.length - 1 && grid[i][j] !== grid[i + 1][j]) return false;
        if (j < grid[0].length - 1 && grid[i][j] === grid[i][j + 1]) return false;
        return true;
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!isValid(i, j)) return false;
        }
    }
    
    return true;
}
```

### 💡 Solution 3: Row and Column Check

```javascript
function checkGridRowCol(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== grid[i + 1][j]) return false;
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (grid[i][j] === grid[i][j + 1]) return false;
        }
    }
    
    return true;
}
```

### 💡 Solution 4: Using Array.every Method

```javascript
function checkGridEvery(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    return grid.every((row, i) =>
        row.every((value, j) =>
            (i === m - 1 || value === grid[i + 1][j]) &&
            (j === n - 1 || value !== grid[i][j + 1])
        )
    );
}
```

### 💡 Solution 5: Using Array.some Method

```javascript
function checkGridSome(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    return !grid.some((row, i) =>
        row.some((value, j) =>
            (i < m - 1 && value !== grid[i + 1][j]) ||
            (j < n - 1 && value === grid[i][j + 1])
        )
    );
}
```

### 💡 Solution 6: Using Nested Loops and Flags

```javascript
function checkGridNestedLoops(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let isValid = true;
    
    for (let i = 0; i < m && isValid; i++) {
        for (let j = 0; j < n && isValid; j++) {
            if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) isValid = false;
            if (j < n - 1 && grid[i][j] === grid[i][j + 1]) isValid = false;
        }
    }
    
    return isValid;
}
```

### 💡 Solution 7: Using While Loops

```javascript
function checkGridWhile(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let i = 0;
    
    while (i < m) {
        let j = 0;
        while (j < n) {
            if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) return false;
            if (j < n - 1 && grid[i][j] === grid[i][j + 1]) return false;
            j++;
        }
        i++;
    }
    
    return true;
}
```

### 💡 Solution 8: Using Map for Validity Check

```javascript
function checkGridMap(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const checkMap = new Map();
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) checkMap.set('row', false);
            if (j < n - 1 && grid[i][j] === grid[i][j + 1]) checkMap.set('col', false);
        }
    }
    
    return !checkMap.has('row') && !checkMap.has('col');
}
```

### 💡 Solution 9: Using Functional Programming (Filter)

```javascript
function checkGridFilter(grid) {
    const rowViolations = grid.flatMap((row, i) =>
        row.flatMap((value, j) => (i < grid.length - 1 && value !== grid[i + 1][j]) ? [false] : [])
    );
    
    const colViolations = grid.flatMap((row, i) =>
        row.flatMap((value, j) => (j < row.length - 1 && value === row[j + 1]) ? [false] : [])
    );
    
    return rowViolations.length === 0 && colViolations.length === 0;
}
```

### 💡 Solution 10: Using Recursive Function

```javascript
function checkGridRecursive(grid) {
    function check(i, j) {
        if (i >= grid.length) return true;
        if (j >= grid[0].length) return check(i + 1, 0);
        
        if (i < grid.length - 1 && grid[i][j] !== grid[i + 1][j]) return false;
        if (j < grid[0].length - 1 && grid[i][j] === grid[i][j + 1]) return false;
        
        return check(i, j + 1);
    }
    
    return check(0, 0);
}
```

### 💡 Solution 11: Using Reduce for Validation

```javascript
function checkGridReduce(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    return grid.reduce((valid, row, i) => {
        return valid && row.reduce((rowValid, value, j) => {
            if (i < m - 1 && value !== grid[i + 1][j]) return false;
            if (j < n - 1 && value === grid[i][j + 1]) return false;
            return rowValid;
        }, true);
    }, true);
}
```

### 💡 Solution 12: Using Iteration with Flags

```javascript
function checkGridFlags(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let isValid = true;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < m - 1 && grid[i][j] !== grid[i + 1][j]) {
                isValid = false;
                break;
            }
            if (j < n - 1 && grid[i][j] === grid[i][j + 1]) {
                isValid = false;
                break;
            }
        }
        if (!isValid) break;
    }
    
    return isValid;
}
```

### 💡 Solution 13: Using Generators

```javascript
function checkGridGenerators(grid) {
    for (const [i, j] of traverseGrid(grid)) {
        if (i < grid.length - 1 && grid[i][j] !== grid[i + 1][j]) return false;
        if (j < grid[0].length - 1 && grid[i][j] === grid[i][j + 1]) return false;
    }
    
    return true;
}
function* traverseGrid(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            yield [i, j];
        }
    }
}
```