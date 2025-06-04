# Set Matrix Zeroes

## 📝 Problem

Imagine you have a matrix of integers. Your task is to modify this matrix in place such that if any element in the matrix is zero, its entire row and column are set to zeroes.

Here’s how you should approach the problem:

1.  **Input:** A 2D matrix of integers. The matrix has dimensions `m x n`, where `1 <= m, n <= 200`, and each integer in the matrix can range from `-2^31` to `2^31 - 1`.
    
2.  **Output:** The modified matrix where each row and column containing at least one zero has been set to zeroes.


## 📌 Examples

### Example 1

**Input:** matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]  
**Output:** [ [1, 0, 1], [0, 0, 0], [1, 0, 1]]

### Example 2

**Input:** matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]  
**Output:** [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0] ]

---

## ✅ Solutions

### 💡 Solution 1: Using Extra Space (O(m + n) Space)

```javascript
function setZeroesUsingExtraSpace(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const zeroRows = Array(numRows).fill(false);
    const zeroCols = Array(numCols).fill(false);

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    // Identify which rows and columns contain zeroes
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows[row] = true;
                zeroCols[col] = true;
            }
        }
    }

    // Set rows to zero
    for (let row = 0; row < numRows; row++) {
        if (zeroRows[row]) {
            for (let col = 0; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Set columns to zero
    for (let col = 0; col < numCols; col++) {
        if (zeroCols[col]) {
            for (let row = 0; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 2: Using Matrix First Row and Column for Marking

```javascript
function setZeroesUsingMatrixMarks(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Check if the first row has any zeroes
    for (let col = 0; col < numCols; col++) {
        if (matrix[0][col] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Check if the first column has any zeroes
    for (let row = 0; row < numRows; row++) {
        if (matrix[row][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Use the first row and column to mark zero rows and columns
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                resultMatrix[row][0] = 0;
                resultMatrix[0][col] = 0;
            }
        }
    }

    // Set zeroes in the marked rows
    for (let row = 1; row < numRows; row++) {
        if (resultMatrix[row][0] === 0) {
            for (let col = 1; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Set zeroes in the marked columns
    for (let col = 1; col < numCols; col++) {
        if (resultMatrix[0][col] === 0) {
            for (let row = 1; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Zero out the first row if needed
    if (firstRowHasZero) {
        for (let col = 0; col < numCols; col++) {
            resultMatrix[0][col] = 0;
        }
    }

    // Zero out the first column if needed
    if (firstColHasZero) {
        for (let row = 0; row < numRows; row++) {
            resultMatrix[row][0] = 0;
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 3: In-place Matrix Modification with Boolean Flags

```javascript
function setZeroesWithFlags(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    let zeroFirstRow = false;
    let zeroFirstCol = false;

    // Determine if first row or column has zeroes
    for (let row = 0; row < numRows; row++) {
        if (matrix[row][0] === 0) zeroFirstCol = true;
    }
    for (let col = 0; col < numCols; col++) {
        if (matrix[0][col] === 0) zeroFirstRow = true;
    }

    // Use first row and column as markers
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                resultMatrix[row][0] = 0;
                resultMatrix[0][col] = 0;
            }
        }
    }

    // Set zeroes based on markers
    for (let row = 1; row < numRows; row++) {
        if (resultMatrix[row][0] === 0) {
            for (let col = 1; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }
    for (let col = 1; col < numCols; col++) {
        if (resultMatrix[0][col] === 0) {
            for (let row = 1; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Handle the first row and column
    if (zeroFirstRow) {
        for (let col = 0; col < numCols; col++) {
            resultMatrix[0][col] = 0;
        }
    }
    if (zeroFirstCol) {
        for (let row = 0; row < numRows; row++) {
            resultMatrix[row][0] = 0;
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 4: Using a Set for Row and Column Tracking

```javascript
function setZeroesUsingSets(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    // Identify zero rows and columns
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows.add(row);
                zeroCols.add(col);
            }
        }
    }

    // Set rows to zero
    for (const row of zeroRows) {
        for (let col = 0; col < numCols; col++) {
            resultMatrix[row][col] = 0;
        }
    }

    // Set columns to zero
    for (const col of zeroCols) {
        for (let row = 0; row < numRows; row++) {
            resultMatrix[row][col] = 0;
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 5: In-place Using Boolean Matrix

```javascript
function setZeroesWithBooleanMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const zeroRows = Array(numRows).fill(false);
    const zeroCols = Array(numCols).fill(false);

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    // Find zeroes and mark the rows and columns
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows[row] = true;
                zeroCols[col] = true;
            }
        }
    }

    // Zero out rows
    for (let row = 0; row < numRows; row++) {
        if (zeroRows[row]) {
            for (let col = 0; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Zero out columns
    for (let col = 0; col < numCols; col++) {
        if (zeroCols[col]) {
            for (let row = 0; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 6: Using Single Array for Marking

```javascript
function setZeroesUsingSingleArray(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const marks = Array(numRows + numCols).fill(false);

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    // Mark the rows and columns
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                marks[row] = true;
                marks[numRows + col] = true;
            }
        }
    }

    // Set rows to zero
    for (let row = 0; row < numRows; row++) {
        if (marks[row]) {
            for (let col = 0; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Set columns to zero
    for (let col = 0; col < numCols; col++) {
        if (marks[numRows + col]) {
            for (let row = 0; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 7: Diagonal Method

```javascript
function setZeroesUsingDiagonal(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    let hasZeroInFirstRow = false;
    let hasZeroInFirstCol = false;

    // Check first row and column
    for (let col = 0; col < numCols; col++) {
        if (matrix[0][col] === 0) {
            hasZeroInFirstRow = true;
            break;
        }
    }
    for (let row = 0; row < numRows; row++) {
        if (matrix[row][0] === 0) {
            hasZeroInFirstCol = true;
            break;
        }
    }

    // Use diagonal to mark zeroes
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                resultMatrix[row][0] = 0;
                resultMatrix[0][col] = 0;
            }
        }
    }

    // Zero out the rows
    for (let row = 1; row < numRows; row++) {
        if (resultMatrix[row][0] === 0) {
            for (let col = 1; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Zero out the columns
    for (let col = 1; col < numCols; col++) {
        if (resultMatrix[0][col] === 0) {
            for (let row = 1; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    // Handle the first row and column
    if (hasZeroInFirstRow) {
        for (let col = 0; col < numCols; col++) {
            resultMatrix[0][col] = 0;
        }
    }
    if (hasZeroInFirstCol) {
        for (let row = 0; row < numRows; row++) {
            resultMatrix[row][0] = 0;
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 8: Two-Pass Algorithm with Auxiliary Array

```javascript
function setZeroesTwoPass(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const zeroRows = Array(numRows).fill(false);
    const zeroCols = Array(numCols).fill(false);

    // Create a copy of the matrix
    const resultMatrix = matrix.map(row => row.slice());

    // First pass: identify zeroes
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows[row] = true;
                zeroCols[col] = true;
            }
        }
    }

    // Second pass: apply zeroes
    for (let row = 0; row < numRows; row++) {
        if (zeroRows[row]) {
            for (let col = 0; col < numCols; col++) {
                resultMatrix[row][col] = 0;
            }
        }
    }
    for (let col = 0; col < numCols; col++) {
        if (zeroCols[col]) {
            for (let row = 0; row < numRows; row++) {
                resultMatrix[row][col] = 0;
            }
        }
    }

    return resultMatrix;
}
```

### 💡 Solution 9: Using Bitwise Operations for Flagging

```javascript
function setZeroesUsingBitwise(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    let zeroFirstRow = false;
    let zeroFirstCol = false;

    // Check if the first row contains zeroes
    for (let col = 0; col < numCols; col++) {
        if (matrix[0][col] === 0) {
            zeroFirstRow = true;
            break;
        }
    }

    // Check if the first column contains zeroes
    for (let row = 0; row < numRows; row++) {
        if (matrix[row][0] === 0) {
            zeroFirstCol = true;
            break;
        }
    }

    // Use the first row and first column to mark zeroes
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    // Zero out cells based on the marks in the first row and column
    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numCols; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    // Zero out the first row if needed
    if (zeroFirstRow) {
        for (let col = 0; col < numCols; col++) {
            matrix[0][col] = 0;
        }
    }

    // Zero out the first column if needed
    if (zeroFirstCol) {
        for (let row = 0; row < numRows; row++) {
            matrix[row][0] = 0;
        }
    }

    // Return a new matrix with the modifications
    return matrix.map(row => row.slice());
}
```