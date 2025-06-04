# Fibonacci Number

## 📝 Problem

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. Here's how it looks:

*   F(0) = 0
    
*   F(1) = 1
    
*   For any number n greater than 1, F(n) = F(n - 1) + F(n - 2)
    

Your task is to find the `n`th number in this sequence.

Write a function to calculate the Fibonacci number at position `n`. You can use different techniques such as simple recursion, dynamic programming, or iterative approaches.


## 📌 Examples

### Example 1

**Input:** n = 2  
**Output:** 1

### Example 2

**Input:** n = 3  
**Output:** 2

### Example 3

**Input:** n = 4  
**Output:** 3

---

## ✅ Solutions

### 💡 Solution 1: Recursive Approach

```javascript
function fibonacciRecursive(n) { // Basic Recursive Approach with Input Validation
    if (typeof n === 'string') {
        n = parseInt(n, 10); // Convert string to integer
    }

    if (isNaN(n) || n < 0) {
        throw new Error("Input must be a non-negative integer");
    }

    if (n <= 1) return n; // Base cases: F(0) = 0 and F(1) = 1

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
```

### 💡 Solution 2: Memoization (Top-Down Dynamic Programming)

```javascript
function fibonacciMemoized(n, memo = {}) { // Recursive with Memoization
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    return memo[n];
}
```

### 💡 Solution 3: Iterative Approach

```javascript
function fibonacciIterative(n) { // Iterative Approach
    if (n <= 1) return n;
    let previous = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}
```

### 💡 Solution 4: Space-Optimized Iterative Approach

```javascript
function fibonacciOptimized(n) { // Space-Optimized Iterative Approach
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n <= 1) return n; // Base cases: F(0) = 0 and F(1) = 1

    let previous = 0; // F(0)
    let current = 1;  // F(1)

    for (let i = 2; i <= n; i++) {
        let next = previous + current; // Compute the next Fibonacci number
        previous = current; // Move the previous number to the current position
        current = next; // Update current to the next Fibonacci number
    }

    return current; // Return the nth Fibonacci number
}
```

### 💡 Solution 5: Binets Formula

```javascript
function fibonacciBinet(n) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;
    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
}
```

### 💡 Solution 6: Using Recurrence Relation with Direct Computation

```javascript
function fibonacciDirect(n) {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    let a = 0, b = 1;
    while (n > 0) {
        let temp = a;
        a = b;
        b = temp + b;
        n--;
    }
    return a;
}
```

### 💡 Solution 7: Using Generating Functions

```javascript
function fibonacciGeneratingFunction(n) {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
```

### 💡 Solution 8: Using Python-like List Comprehension in JavaScript

```javascript
function fibonacciListComprehension(n) {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    let fibs = [0, 1];
    [...Array(n - 1).keys()].forEach(() => fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]));
    return fibs[n];
}
```

### 💡 Solution 9: Matrix Multiplication

```javascript
function fibonacciMatrix(n) {
    if (n <= 1) return n;
    const matrix = [1, 1, 1, 0];
    const result = matrixPower(matrix, n - 1);
    return result[0]; // F(n) is at the top left corner of the result matrix
}


function matrixMultiply(a, b) {
    return [
        a[0] * b[0] + a[1] * b[2], // First row, first column
        a[0] * b[1] + a[1] * b[3], // First row, second column
        a[2] * b[0] + a[3] * b[2], // Second row, first column
        a[2] * b[1] + a[3] * b[3]  // Second row, second column
    ];
}

function matrixPower(matrix, n) {
    let result = [1, 0, 0, 1]; // Identity matrix
    let base = matrix;

    while (n > 0) {
        if (n % 2 === 1) {
            result = matrixMultiply(result, base);
        }
        base = matrixMultiply(base, base);
        n = Math.floor(n / 2);
    }

    return result;
}
```