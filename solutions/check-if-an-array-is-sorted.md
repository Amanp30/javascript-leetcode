# Check if an Array is Sorted

## 📝 Problem

Imagine you have a list of numbers, and you want to know if they’re arranged in a way that makes sense—specifically, if they’re sorted from smallest to largest, or at least not decreasing as you move through the list.

**Your Task:**

Write a function that checks if the numbers in a given list are in non-decreasing order. This means each number in the list should be less than or equal to the number that follows it.


## 📌 Examples

### Example 1

**Input:** array = [1, 2, 2, 3, 4]  
**Output:** true

### Example 2

**Input:** array = [10, 20, 30, 25, 40]  
**Output:** false

### Example 3

**Input:** array = [3, 2, 1]  
**Output:** false

### Example 4

**Input:** string = "hello"  
**Output:** ❌ Throw error => Input is not a valid array

---

## ✅ Solutions

### 💡 Solution 1: Using a Loop

```javascript
function isArraySortedLoop(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            return false;
        }
    }
    return true;
}
```

### 💡 Solution 2: Using every Method

```javascript
function isArraySortedEvery(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    return array.every((value, index, arr) => index === 0 || arr[index - 1] <= value);
}
```

### 💡 Solution 3: Using reduce Method

```javascript
function isArraySortedReduce(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    return array.reduce((sorted, value, index) => {
        return sorted && (index === 0 || array[index - 1] <= value);
    }, true);
}
```

### 💡 Solution 4: Using forEach Method

```javascript
function isArraySortedForEach(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    let sorted = true;
    array.forEach((value, index) => {
        if (index > 0 && array[index - 1] > value) {
            sorted = false;
        }
    });
    return sorted;
}
```

### 💡 Solution 5: Using some Method

```javascript
function isArraySortedSome(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    return !array.some((value, index) => index > 0 && array[index - 1] > value);
}
```

### 💡 Solution 6: Using find Method

```javascript
function isArraySortedFind(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    return array.find((value, index) => index > 0 && array[index - 1] > value) === undefined;
}
```

### 💡 Solution 7: Using map Method

```javascript
function isArraySortedMap(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    return !array.map((value, index) => index > 0 && array[index - 1] > value).includes(true);
}
```

### 💡 Solution 8: Using a Recursive Function

```javascript
function isArraySortedRecursive(array, index = 0) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    if (index >= array.length - 1) return true;
    if (array[index] > array[index + 1]) return false;
    return isArraySortedRecursive(array, index + 1);
}
```

### 💡 Solution 9: Using JSON.stringify Comparison

```javascript
function isArraySortedJSON(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    const sortedArray = [...array].sort((a, b) => a - b);
    return JSON.stringify(array) === JSON.stringify(sortedArray);
}
```

### 💡 Solution 10: Using a Helper Function to Compare Two Arrays

```javascript
function isArraySortedByComparison(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a valid array');
    }

    const sortedArray = [...array].sort((a, b) => a - b);
    return arraysAreEqual(array, sortedArray);
}

function arraysAreEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
```