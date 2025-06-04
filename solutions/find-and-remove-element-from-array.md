# Find and Remove element from array 

## 📝 Problem

Write a JavaScript function that removes an element from an array at a specified index. The function must validate inputs and handle errors appropriately.


## 📌 Examples

### Example 1

**Input:** array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], position = 10  
**Output:** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

### Example 2

**Input:** array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], position = -4  
**Output:** ❌ Throw error => Position must be a valid integer within the array bounds

---

## ✅ Solutions

### 💡 Solution 1: Using splice() Method

```javascript
function removeElementUsingSplice(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    arr.splice(position, 1);
    return arr;
}
```

### 💡 Solution 2: Using slice() Method

```javascript
function removeElementUsingSlice(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    return arr.slice(0, position).concat(arr.slice(position + 1));
}
```

### 💡 Solution 3: Using filter() Method

```javascript
function removeElementUsingFilter(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    return arr.filter((_, index) => index !== position);
}
```

### 💡 Solution 4: Using reduce() Method

```javascript
function removeElementUsingReduce(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    return arr.reduce((acc, curr, index) => {
        if (index !== position) acc.push(curr);
        return acc;
    }, []);
}
```

### 💡 Solution 5: Using for Loop

```javascript
function removeElementUsingForLoop(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== position) {
            result.push(arr[i]);
        }
    }
    return result;
}
```

### 💡 Solution 6: Using map() Method

```javascript
function removeElementUsingMap(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    return arr.map((item, index) => (index === position ? undefined : item))
              .filter(item => item !== undefined);
}
```

### 💡 Solution 7: Using copyWithin() Method

```javascript
function removeElementUsingCopyWithin(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    arr.copyWithin(position, position + 1);
    arr.length--; // reduce array length by 1
    return arr;
}
```

### 💡 Solution 8: Using fill() Method

```javascript
function removeElementUsingFill(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    arr.fill(undefined, position, position + 1);
    return arr.filter(item => item !== undefined);
}
```

### 💡 Solution 9: Using findIndex() Method with splice()

```javascript
function removeElementUsingFindIndex(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    let index = arr.findIndex((_, i) => i === position);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
```

### 💡 Solution 10: Using Array.from() and filter()

```javascript
function removeElementUsingArrayFrom(arr, position) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (!Number.isInteger(position) || position < 0 || position >= arr.length) {
        throw new RangeError('Position must be a valid integer within the array bounds');
    }
    return Array.from(arr).filter((_, index) => index !== position);
}
```