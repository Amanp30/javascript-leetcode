# Maximal rectangle

## 📝 Problem

You are given a binary matrix (a grid) where each cell contains either '0' or '1'. Your task is to find the largest rectangle that contains only '1's in this grid and return its area.


## 📌 Examples

### Example 1

**Input:** array = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]  
**Output:** 6

### Example 2

**Input:** array = [["0"]]  
**Output:** 0

### Example 3

**Input:** array = [["1"]]  
**Output:** 1

---

## ✅ Solutions

### 💡 Solution 1: Histogram-Based Dynamic Programming

```javascript
function maximalRectangleHistogram(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, computeLargestRectangleArea(heights));
    }

    return maxArea;
}

function computeLargestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop();
            const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}
```

### 💡 Solution 2: Brute Force Rectangle Search

```javascript
function maximalRectangleBruteForce(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;

    for (let r1 = 0; r1 < rows; r1++) {
        for (let c1 = 0; c1 < cols; c1++) {
            if (matrix[r1][c1] === '1') {
                for (let r2 = r1; r2 < rows; r2++) {
                    for (let c2 = c1; c2 < cols; c2++) {
                        if (matrix[r2][c2] === '1') {
                            let valid = true;
                            for (let r = r1; r <= r2; r++) {
                                for (let c = c1; c <= c2; c++) {
                                    if (matrix[r][c] !== '1') {
                                        valid = false;
                                        break;
                                    }
                                }
                                if (!valid) break;
                            }
                            if (valid) {
                                maxArea = Math.max(maxArea, (r2 - r1 + 1) * (c2 - c1 + 1));
                            }
                        }
                    }
                }
            }
        }
    }

    return maxArea;
}
```

### 💡 Solution 3: Prefix Sum Matrix Approach

```javascript
function maximalRectanglePrefixSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const prefixSum = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
    let maxArea = 0;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            prefixSum[i][j] = parseInt(matrix[i - 1][j - 1]) +
                prefixSum[i - 1][j] +
                prefixSum[i][j - 1] -
                prefixSum[i - 1][j - 1];
        }
    }

    for (let r1 = 1; r1 <= rows; r1++) {
        for (let c1 = 1; c1 <= cols; c1++) {
            for (let r2 = r1; r2 <= rows; r2++) {
                for (let c2 = c1; c2 <= cols; c2++) {
                    const area = (r2 - r1 + 1) * (c2 - c1 + 1);
                    const total = prefixSum[r2][c2] - prefixSum[r1 - 1][c2] -
                        prefixSum[r2][c1 - 1] + prefixSum[r1 - 1][c1 - 1];
                    if (total === area) {
                        maxArea = Math.max(maxArea, area);
                    }
                }
            }
        }
    }

    return maxArea;
}
```

### 💡 Solution 4: Dynamic Programming with 2D Array

```javascript
function maximalRectangleDP2D(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = (i === 0 ? 1 : dp[i - 1][j] + 1);
                let minHeight = dp[i][j];
                for (let k = j; k >= 0; k--) {
                    minHeight = Math.min(minHeight, dp[i][k]);
                    maxArea = Math.max(maxArea, minHeight * (j - k + 1));
                }
            }
        }
    }

    return maxArea;
}
```

### 💡 Solution 5: Stack-Based Histogram Calculation

```javascript
function maximalRectangleStack(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        // Update histogram heights for the current row
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }

        // Calculate the maximum rectangle area for the updated histogram heights
        maxArea = Math.max(maxArea, maxRectangleInHistogram(heights));
    }

    return maxArea;
}

function maxRectangleInHistogram(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop();
            const height = heights[topOfStack];
            const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const height = heights[topOfStack];
        const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}
```

### 💡 Solution 6: Binary Search Approach

```javascript
function maximalRectangleBinarySearch(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    // Binary search on area
    let left = 0;
    let right = rows * cols;
    let maxArea = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canFormRectangle(matrix, mid)) {
            maxArea = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return maxArea;
}

function canFormRectangle(matrix, area) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const minHeight = Math.ceil(area / cols);

    // Construct height matrix
    const heights = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < cols; i++) {
        heights[0][i] = matrix[0][i] === '1' ? 1 : 0;
        for (let r = 1; r < rows; r++) {
            heights[r][i] = matrix[r][i] === '1' ? heights[r - 1][i] + 1 : 0;
        }
    }

    // Check if there's a rectangle with at least the given area
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (heights[r][c] >= minHeight) {
                let width = 0;
                for (let k = c; k >= 0; k--) {
                    if (heights[r][k] < minHeight) break;
                    width++;
                    if (width * minHeight >= area) return true;
                }
            }
        }
    }

    return false;
}
```

### 💡 Solution 7: Dynamic Programming with Row and Column Processing

```javascript
function maximalRectangleDP(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }).map(() => Array(cols).fill(0));
    let maxArea = 0;

    // Calculate dp table
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = (j === 0 ? 1 : dp[i][j - 1] + 1);
            } else {
                dp[i][j] = 0;
            }
        }
    }

    // Compute the maximum rectangle area
    for (let j = 0; j < cols; j++) {
        let stack = [];
        for (let i = 0; i < rows; i++) {
            while (stack.length > 0 && dp[i][j] < dp[stack[stack.length - 1]][j]) {
                const height = dp[stack.pop()][j];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        while (stack.length > 0) {
            const height = dp[stack.pop()][j];
            const width = stack.length === 0 ? rows : rows - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    return maxArea;
}
```

### 💡 Solution 8: Row-wise Prefix Sum and Rectangle Calculation

```javascript
function maximalRectangleRowPrefix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;
    const heights = Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, computeAreaInHistogram(heights));
    }

    return maxArea;
}

function computeAreaInHistogram(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop();
            const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}
```

### 💡 Solution 9: Bottom-Up Dynamic Programming

```javascript
function maximalRectangleBottomUpApproach(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        // Update histogram heights
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }

        // Calculate the maximal rectangle for the current histogram
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
}

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop();
            const height = heights[topOfStack];
            const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const height = heights[topOfStack];
        const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}
```

### 💡 Solution 10: Matrix Transformation Approach

```javascript
function maximalRectangleTransform(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;

    const heights = Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, computeLargestRect(heights));
    }

    return maxArea;
}

function computeLargestRect(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop();
            const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}
```