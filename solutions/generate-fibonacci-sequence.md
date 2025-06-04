# Generate Fibonacci Sequence

## 📝 Problem

In this problem, you are required to write a JavaScript function that generates the Fibonacci sequence using recursion. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. Specifically, the sequence is defined as follows:

*   `F(0) = 0`
    
*   `F(1) = 1`
    
*   For `n > 1`: `F(n) = F(n - 1) + F(n - 2)`


## 📌 Examples

### Example 1

**Input:** n = 5  
**Output:** [0,1,1,2,3]

### Example 2

**Input:** n = 0  
**Output:** []

---

## ✅ Solutions

### 💡 Solution 1: Fibonacci Sequence using recursion

```javascript
// Function to generate a list of Fibonacci numbers up to a certain count
function generateFibonacciSequence(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 💡 Solution 2: Iterative Approach

```javascript
function generateFibonacciSequenceIterative(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacciIterative(i));
    }
    return sequence;
}

function fibonacciIterative(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

### 💡 Solution 3: Memoization Approach

```javascript
function generateFibonacciSequenceMemo(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacciMemo(i));
    }
    return sequence;
}

const fibonacciMemo = (function() {
    const memo = [0, 1];
    function fib(n) {
        if (n < memo.length) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    return fib;
})();
```

### 💡 Solution 4: Matrix Exponentiation

```javascript
function generateFibonacciSequenceMatrix(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacciMatrix(i));
    }
    return sequence;
}

function fibonacciMatrix(n) {
    if (n <= 1) return n;
    const result = matrixPower([1, 1, 1, 0], n - 1);
    return result[0];
}

function matrixPower(matrix, n) {
    if (n === 1) return matrix;
    if (n % 2 === 0) return matrixPower(matrixMultiply(matrix, matrix), n / 2);
    return matrixMultiply(matrix, matrixPower(matrix, n - 1));
}

function matrixMultiply(a, b) {
    return [
        a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3],
        a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]
    ];
}
```

### 💡 Solution 5: Binet Formula

```javascript
function generateFibonacciSequenceBinet(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacciBinet(i));
    }
    return sequence;
}

function fibonacciBinet(n) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;
    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
}
```

### 💡 Solution 6: Generator Function

```javascript
function generateFibonacciSequenceGenerator(count) {
    const sequence = [];
    const gen = fibonacciGenerator();
    for (let i = 0; i < count; i++) {
        sequence.push(gen.next().value);
    }
    return sequence;
}

function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
```

### 💡 Solution 7: Dynamic Programming (Bottom-Up Approach)

```javascript
function generateFibonacciSequenceDynamic(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacciDynamic(i));
    }
    return sequence;
}

function fibonacciDynamic(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

### 💡 Solution 8: Using an Array

```javascript
function generateFibonacciSequenceArray(count) {
    if (count <= 0) return [];
    if (count === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
```

### 💡 Solution 9: Using a Recurrence Relation

```javascript
function generateFibonacciSequenceRecurrence(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacciRecurrence(i));
    }
    return sequence;
}

function fibonacciRecurrence(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    const fibs = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
    }
    return fibs[n];
}
```

### 💡 Solution 10: Fibonacci Sequence Using Streams (Functional Programming)

```javascript
function generateFibonacciSequenceStream(count) {
    const sequence = [];
    const stream = fibonacciStream();
    for (let i = 0; i < count; i++) {
        sequence.push(stream.next().value);
    }
    return sequence;
}

function fibonacciStream() {
    return (function* () {
        let a = 0, b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    })();
}
```