# Pascal's Triangle

## 📝 Problem

Write a function that generates the first `numRows` of Pascal's Triangle and returns them as a list of lists.

**Description:**

Pascal's Triangle is a triangular array of numbers where:

*   The top row is a single `1`.
    
*   Each subsequent row is constructed by summing pairs of numbers from the row directly above it.
    
*   Each row begins and ends with `1`.


## 📌 Examples

### Example 1

**Input:** input = 5  
**Output:**  [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1] ]

### Example 2

**Input:** input = 1  
**Output:** [[1]]

---

## ✅ Solutions

### 💡 Solution 1: Using recursion

```javascript
function generatePascalTriangleRecursion(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    // Initialize the triangle with the first row
    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        // Create a new row filled with 1s
        const newRow = new Array(i + 1).fill(1);

        // Update the values in the new row
        for (let j = 1; j < i; j++) {
            newRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Add the new row to the triangle
        triangle.push(newRow);
    }

    return triangle;
}
```

### 💡 Solution 2: Using Combinatorial Formula

```javascript
function generatePascalTrianleCombinatorialFormula(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        // Create a new row with `i + 1` elements initialized to 1
        const row = new Array(i + 1).fill(1);

        // Update the values in the row based on the previous row
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        // Add the new row to the result
        result.push(row);
    }

    return result;
}
```

### 💡 Solution 3: Using Dynamic Programming with 1D Array

```javascript
function generatePascalTriangleDPOneDArr(numRows) {
    const result = [];
    let prevRow = [];

    for (let i = 0; i < numRows; i++) {
        // Create the current row with `i + 1` elements initialized to 1
        const currentRow = new Array(i + 1).fill(1);

        // Update the values in the current row based on the previous row
        for (let j = 1; j < i; j++) {
            currentRow[j] = prevRow[j - 1] + prevRow[j];
        }

        // Add the current row to the result
        result.push(currentRow);

        // Update prevRow to be the currentRow for the next iteration
        prevRow = currentRow;
    }

    return result;
}
```

### 💡 Solution 4: Generate Pascals Triangle Using Factorials and Binomial Coefficients

```javascript
function generatePascalTriangleFactorialsAndBinomialCoff(numRows) {
    // Factorial function
    function fact(n) {
        if (n === 0) return 1;
        return n * fact(n - 1);
    }

    // Combination function (nCr)
    function nCr(n, r) {
        // Compute nCr as n! / (r! * (n - r)!)
        return fact(n) / (fact(r) * fact(n - r));
    }

    // Generate Pascal's Triangle
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            row.push(nCr(i, j));
        }
        result.push(row);
    }

    return result;
}
```

### 💡 Solution 5: Using Dynamic Row Resizing and Iterative Computation

```javascript
function pascalTriangleDnamicRowResizIterative(numRows) {
    const v = Array.from({ length: numRows }, () => []);

    for (let i = 0; i < numRows; i++) {
        v[i].length = i + 1; // Resize each row to have the correct number of elements
        v[i][0] = v[i][i] = 1; // Set the first and last elements of each row to 1

        for (let j = 1; j < i; j++) {
            v[i][j] = v[i - 1][j - 1] + v[i - 1][j]; // Compute the value as the sum of the two elements above
        }
    }

    return v;
}
```

### 💡 Solution 6: Pascals Triangle Using Binomial Coefficients

```javascript
function pascalTrianlgeBinomial2 (n) {
    // Helper function to compute binomial coefficient (n choose k)
    function comb(n, k) {
        if (k > n) return 0;
        if (k === 0 || k === n) return 1;
        let result = 1;
        for (let i = 0; i < k; i++) {
            result = result * (n - i) / (i + 1);
        }
        return result;
    }

    // Generate Pascal's Triangle
    const result = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            row.push(comb(i, j));
        }
        result.push(row);
    }

    return result;
}
```

### 💡 Solution 7: Using Recursive Row Construction

```javascript
function generatePascalTriangleRecursive(numRows) {
    const triangle = [[1], [1, 1]];

    if (numRows === 1) return [[1]];

    function buildRow(rowIndex) {
        if (rowIndex >= numRows) return;
        
        const newRow = new Array(rowIndex + 1).fill(1);
        const previousRow = triangle[triangle.length - 1];
        
        for (let j = 1; j < rowIndex; j++) {
            newRow[j] = previousRow[j - 1] + previousRow[j];
        }
        
        triangle.push(newRow);
        buildRow(rowIndex + 1);
    }

    buildRow(2); // Start building from the third row (index 2)
    return triangle.slice(0, numRows);
}
```

### 💡 Solution 8: Using Iterative Row Construction

```javascript
function generatePascalTriangleIterative(numRows) {
    const result = [[1]];

    while (result.length < numRows) {
        const prevRow = result[result.length - 1];
        const newRow = new Array(prevRow.length + 1).fill(1);

        for (let j = 1; j < newRow.length - 1; j++) {
            newRow[j] = prevRow[j - 1] + prevRow[j];
        }

        result.push(newRow);
    }

    return result;
}
```