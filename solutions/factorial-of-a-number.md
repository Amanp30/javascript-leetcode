# Factorial of a number

## 📝 Problem

Write a JavaScript function to find factorial of a number. You can use recursive approach, tail-recursive approach and iterative approach

You can understand factorial on [byjus website](https://byjus.com/maths/factorial/)


## 📌 Examples

### Example 1

**Input:** n = 5  
**Output:** 120

### Example 2

**Input:** n = 22  
**Output:** 1124000727777607680000

---

## ✅ Solutions

### 💡 Solution 1: Recursive Approach

```javascript
function factorialRecursive(number) {
    if (number < 0) {
        throw new Error("Factorial cannot be calculated for negative values.");
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorialRecursive(number - 1);
}
```

### 💡 Solution 2: Iterative Approach

```javascript
function factorialIterative(number) {
    if (number < 0) {
        throw new Error("Factorial cannot be calculated for negative values.");
    }
    let product = 1;
    for (let i = 2; i <= number; i++) {
        product *= i;
    }
    return product;
}
```

### 💡 Solution 3: Tail-Recursive

```javascript
function factorialTailRecursive(number, accumulator = 1) {
    if (number < 0) {
        throw new Error("Factorial cannot be calculated for negative values.");
    }
    if (number === 0 || number === 1) {
        return accumulator;
    }
    return factorialTailRecursive(number - 1, accumulator * number);
}
```

### 💡 Solution 4: Using array map reduce

```javascript
function factorialArrayMapReduce(number) {
  if (number < 0) {
    throw new Error("Factorial cannot be calculated for negative values.");
  }
  return [...Array(number + 1).keys()]
    .slice(1)
    .reduce((product, current) => product * current, 1);
}
```

### 💡 Solution 5: Using while loop

```javascript
function factorialWhileLoop(number) {
    if (number < 0) {
        throw new Error("Factorial cannot be calculated for negative values.");
    }
    let product = 1;
    let i = 2;
    while (i <= number) {
        product *= i;
        i++;
    }
    return product;
}
```