# Move All Zeros to the End of an Array

## 📝 Problem

Write a JavaScript function that moves all zeroes in an array to the end while maintaining the order of non-zero elements. The function should also handle input validation.


## 📌 Examples

### Example 1

**Input:** array = [0, 1, 0, 3, 12]  
**Output:** [1, 3, 12, 0, 0]

### Example 2

**Input:** num = 4  
**Output:** ❌ Throw error => Input must be an array

---

## ✅ Solutions

### 💡 Solution 1: Using Two-Pointer Technique

```javascript
function moveZerosToEndTwoPointer(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}
```

### 💡 Solution 2: Using filter() and concat()

```javascript
function moveZerosToEndFilterConcat(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let nonZeros = arr.filter(num => num !== 0);
    let zeros = arr.filter(num => num === 0);
    return nonZeros.concat(zeros);
}
```

### 💡 Solution 3: Using reduce()

```javascript
function moveZerosToEndReduce(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.reduce((acc, num) => {
        if (num !== 0) acc.push(num);
        return acc;
    }, []).concat(arr.filter(num => num === 0));
}
```

### 💡 Solution 4: Using for Loop

```javascript
function moveZerosToEndForLoop(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let result = [];
    let zeroCount = 0;
    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }
    while (zeroCount-- > 0) {
        result.push(0);
    }
    return result;
}
```

### 💡 Solution 5: Using map() and filter()

```javascript
function moveZerosToEndMapFilter(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.map(num => num === 0 ? null : num)
              .filter(num => num !== null)
              .concat(arr.filter(num => num === 0));
}
```

### 💡 Solution 6: Using copyWithin() Method

```javascript
function moveZerosToEndCopyWithin(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < arr.length; readIndex++) {
        if (arr[readIndex] !== 0) {
            arr[writeIndex++] = arr[readIndex];
        }
    }
    for (let i = writeIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
```

### 💡 Solution 7: Using fill() Method

```javascript
function moveZerosToEndFill(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let zeroCount = arr.filter(num => num === 0).length;
    let result = arr.filter(num => num !== 0);
    result.length = arr.length;
    result.fill(0, result.length - zeroCount);
    return result;
}
```

### 💡 Solution 8: Using splice() Method

```javascript
function moveZerosToEndSplice(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let zeroCount = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            zeroCount++;
        }
    }
    arr.length = arr.length + zeroCount;
    arr.fill(0, arr.length - zeroCount);
    return arr;
}
```

### 💡 Solution 9: Using Array.from()

```javascript
function moveZerosToEndArrayFrom(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let nonZeros = arr.filter(num => num !== 0);
    let zeros = arr.length - nonZeros.length;
    return Array.from(nonZeros).concat(Array(zeros).fill(0));
}
```

### 💡 Solution 10: Using Set and Array

```javascript
function moveZerosToEndSetArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    let nonZeros = [...new Set(arr.filter(num => num !== 0))];
    let zeroCount = arr.length - nonZeros.length;
    return nonZeros.concat(Array(zeroCount).fill(0));
}
```