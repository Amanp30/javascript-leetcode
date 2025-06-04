# Maximal Square

## 📝 Problem

Imagine you have a grid made up of cells, where each cell can be either filled with '0' or '1'. Your goal is to find the largest square within this grid where every cell in the square is filled with '1's. Once you’ve found this largest square, you need to return the area of this square.


## 📌 Examples

### Example 1

**Input:** array = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]  
**Output:** 4

### Example 2

**Input:** array = [["0","1"],["1","0"]]  
**Output:** 1

### Example 3

**Input:** array = [["0"]]  
**Output:** 0

---

## ✅ Solutions

### 💡 Solution 1: Maximal square using dynamic programming

```javascript
function maximalSquareUsingDynamicProgramming(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let maxSide = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 2: Maximal sqaure using optimized space

```javascript
function maximalSquareOptimizedSpace(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(n).fill(0);
    let maxSide = 0;
    let prev = 0;

    for (let i = 0; i < m; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp = dp[j];
            if (matrix[i][j] === '1') {
                dp[j] = Math.min(prev, Math.min(dp[j], (j > 0 ? dp[j - 1] : 0))) + 1;
                maxSide = Math.max(maxSide, dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 3: Brute force search

```javascript
function maximalSquareBruteForceSearch(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                let sideLength = 1;
                while (i + sideLength < m && j + sideLength < n) {
                    let allOnes = true;
                    for (let x = i; x <= i + sideLength; x++) {
                        if (matrix[x][j + sideLength] === '0') {
                            allOnes = false;
                            break;
                        }
                    }
                    for (let y = j; y <= j + sideLength; y++) {
                        if (matrix[i + sideLength][y] === '0') {
                            allOnes = false;
                            break;
                        }
                    }
                    if (allOnes) {
                        sideLength++;
                    } else {
                        break;
                    }
                }
                maxSide = Math.max(maxSide, sideLength);
            }
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 4: Maximal square using prefix sum

```javascript
function maximalSquareUsingPrefixSum(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    // Create a prefix sum matrix
    const prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let maxSide = 0;

    // Compute prefix sums
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefixSum[i][j] = parseInt(matrix[i - 1][j - 1]) 
                + prefixSum[i - 1][j] 
                + prefixSum[i][j - 1] 
                - prefixSum[i - 1][j - 1];
        }
    }

    // Function to get sum of submatrix
    function getSum(x1, y1, x2, y2) {
        return prefixSum[x2 + 1][y2 + 1]
            - prefixSum[x1][y2 + 1]
            - prefixSum[x2 + 1][y1]
            + prefixSum[x1][y1];
    }

    // Check for each possible square size
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sideLength = 1;
            while (i + sideLength <= m && j + sideLength <= n) {
                if (getSum(i, j, i + sideLength - 1, j + sideLength - 1) === sideLength * sideLength) {
                    sideLength++;
                } else {
                    break;
                }
            }
            maxSide = Math.max(maxSide, sideLength - 1);
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 5: Stack Based solution for maximal square

```javascript
function maximalSquareStackBased(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const heights = Array(n).fill(0);
    let maxSide = 0;

    for (let i = 0; i < m; i++) {
        const stack = [];
        for (let j = 0; j < n; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
            while (stack.length && heights[j] < heights[stack[stack.length - 1]]) {
                const h = heights[stack.pop()];
                const w = stack.length ? j - stack[stack.length - 1] - 1 : j;
                maxSide = Math.max(maxSide, Math.min(h, w));
            }
            stack.push(j);
        }
        while (stack.length) {
            const h = heights[stack.pop()];
            const w = stack.length ? n - stack[stack.length - 1] - 1 : n;
            maxSide = Math.max(maxSide, Math.min(h, w));
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 6: Recursive approach for maximal square

```javascript
function maximalSquareRecursiveApproach(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    function getMaxSquareSide(i, j) {
        if (i >= m || j >= n || matrix[i][j] === '0') return 0;
        let side = 1;
        while (i + side < m && j + side < n) {
            for (let x = j; x <= j + side; x++) {
                if (matrix[i + side][x] === '0') return side;
            }
            for (let y = i; y <= i + side; y++) {
                if (matrix[y][j + side] === '0') return side;
            }
            side++;
        }
        return side;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                maxSide = Math.max(maxSide, getMaxSquareSide(i, j));
            }
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 7: Column height method

```javascript
function maximalSquareColumnHeightMethod(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    const dp = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        let prev = 0, temp;
        for (let j = 0; j < n; j++) {
            temp = dp[j];
            if (matrix[i][j] === '1') {
                dp[j] = Math.min(prev, Math.min(dp[j], (j > 0 ? dp[j - 1] : 0))) + 1;
                maxSide = Math.max(maxSide, dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 8: Row height method

```javascript
function maximalSquareRowHeightMethod(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    const dp = Array(m).fill(0).map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                }
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    return maxSide * maxSide;
}
```

### 💡 Solution 9: Using histogram

```javascript
function maximalSquareUsingHistogram(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSide = 0;

    // Initialize an array to store the heights of histograms
    const heights = Array(n).fill(0);

    // Helper function to find the largest square in a histogram
    function largestSquareInHistogram(heights) {
        const stack = [];
        let maxSide = 0;
        for (let i = 0; i <= heights.length; i++) {
            const h = i === heights.length ? 0 : heights[i];
            while (stack.length && h < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
                maxSide = Math.max(maxSide, Math.min(height, width));
            }
            stack.push(i);
        }
        return maxSide;
    }

    // Iterate over each row in the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Update the height of histogram bar
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        // Calculate the largest square that can be formed in the histogram
        maxSide = Math.max(maxSide, largestSquareInHistogram(heights));
    }

    return maxSide * maxSide;
}
```