# Pascal's Triangle II

## 📝 Problem

You are given an integer `rowIndex`. Your task is to return the `rowIndex`\-th row of Pascal's Triangle. Pascal's Triangle is a mathematical construct where each number is the sum of the two numbers directly above it.

The triangle begins with a single row containing `[1]` at the top. Each subsequent row is constructed by adding the adjacent numbers from the row above. For example, the second row `[1, 1]` is derived from the first row, and the third row `[1, 2, 1]` is derived from the second row, and so forth.


## 📌 Examples

### Example 1

**Input:** rowIndex = 3  
**Output:** [1,3,3,1]

### Example 2

**Input:** rowIndex = 0  
**Output:** [1]

### Example 3

**Input:** rowIndex = 1  
**Output:** [1,1]

---

## ✅ Solutions

### 💡 Solution 1: Iterative Construction

```javascript
function getRowIterative(rowIndex) {
    const row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        const newRow = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                newRow.push(1);
            } else {
                newRow.push(row[j - 1] + row[j]);
            }
        }
        row.length = 0;
        row.push(...newRow);
    }
    return row;
}
```

### 💡 Solution 2: Combinatorial Approach

```javascript
function getRowCombinatorial(rowIndex) {
    const row = [];
    let value = 1;
    for (let i = 0; i <= rowIndex; i++) {
        row.push(value);
        value = value * (rowIndex - i) / (i + 1);
    }
    return row;
}
```

### 💡 Solution 3: Recursive Approach

```javascript
function getRowRecursive(rowIndex) {
    if (rowIndex === 0) return [1];
    const prevRow = getRowRecursive(rowIndex - 1);
    const row = [1];
    for (let i = 1; i < rowIndex; i++) {
        row.push(prevRow[i - 1] + prevRow[i]);
    }
    row.push(1);
    return row;
}
```

### 💡 Solution 4: In-place Update Approach

```javascript
function getRowInPlace(rowIndex) {
    const row = new Array(rowIndex + 1).fill(1);
    for (let i = 1; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
}
```

### 💡 Solution 5: Using Factorials

```javascript
function getRowFactorials(rowIndex) {
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    }
    
    const row = [];
    for (let i = 0; i <= rowIndex; i++) {
        row.push(factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i)));
    }
    return row;
}
```

### 💡 Solution 6: DFS with Memoization for Pascals Triangle Row

```javascript
function getRowDFSMemo(rowIndex) {
    const memo = new Map();
    const result = [];

    for (let i = 1; i <= rowIndex + 1; i++) {
        result.push(dfsHelper(rowIndex + 1, i));
    }

    return result;

    function dfsHelper(row, col) {
        if (row === col || col === 1) {
            return 1;
        }
        
        const key = `${row},${col}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        
        const result = dfsHelper(row - 1, col - 1) + dfsHelper(row - 1, col);
        memo.set(key, result);
        
        return result;
    }
}
```

### 💡 Solution 7: Combination Formula Approach for Pascal Triangle Row

```javascript
function getRowCombinationFormula (n) {
    function comb(n, k) {
        if (k > n - k) k = n - k; // Take advantage of symmetry
        let c = 1;
        for (let i = 0; i < k; i++) {
            c = c * (n - i) / (i + 1);
        }
        return c;
    }

    return Array.from({ length: n + 1 }, (_, x) => comb(n, x));
}
```

### 💡 Solution 8: Dynamic Programming Approach

```javascript
function getRowDP(rowIndex) {
    const numRows = rowIndex + 1;
    const pascal = Array.from({ length: numRows }, () => Array(numRows).fill(0));
    
    for (let i = 0; i < numRows; i++) {
        pascal[i][0] = pascal[i][i] = 1;
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }
    }
    
    return pascal[rowIndex].slice(0, rowIndex + 1);
}
```

### 💡 Solution 9: Iterative Approach for Generating a Specific Row of Pascals Triangle

```javascript
function getRow(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];
    
    const row = [1, 1];
    let n = row.length;
    
    while (n - 1 !== rowIndex) {
        row.push(1);
        let prev = 1;
        for (let i = 1; i < n; i++) {
            const temp = row[i];
            row[i] = row[i] + prev;
            prev = temp;
        }
        n = row.length;
    }
    
    return row;
}
```