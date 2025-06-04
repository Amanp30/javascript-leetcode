# Left Rotate Array in JavaScript

## 📝 Problem

Implement a JavaScript function that performs a left rotation on an array by a specified number of positions. Provide multiple solutions using different techniques and methodologies.


## 📌 Examples

### Example 1

**Input:** array = [10, 20, 30, 40, 50, 60, 70, 80], position = 3  
**Output:** [40, 50, 60, 70, 80, 10, 20, 30]

### Example 2

**Input:** array = [5,9,8,6], position = 3  
**Output:** [6,5,9,8]

---

## ✅ Solutions

### 💡 Solution 1: Basic Rotation

```javascript
function rotateLeftBasic(arr, n) {
    n = n % arr.length;
    return arr.slice(n).concat(arr.slice(0, n));
}
```

### 💡 Solution 2: In-Place Rotation

```javascript
function rotateLeftInPlace(arr, n) {
    n = n % arr.length;
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    return arr;
}
```

### 💡 Solution 3: Using Spread Operator

```javascript
function rotateLeftSpread(arr, n) {
    n = n % arr.length;
    return [...arr.slice(n), ...arr.slice(0, n)];
}
```

### 💡 Solution 4: Using Reverse Method

```javascript
function rotateLeftReverse(arr, n) {
  const len = arr.length;
  n = n % len; // Normalize n to handle cases where n > len

  if (n === 0) {
    // No rotation needed; return a copy to avoid modifying the original array
    return [...arr];
  }

  // Helper function to reverse a portion of the array
  const reverseFunc = (arr, left, right) => {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
};


  // Reverse the entire array
  reverseFunc(arr, 0, len - 1);

  // Reverse the first part (0 to len - n - 1)
  reverseFunc(arr, 0, len - n - 1);

  // Reverse the second part (len - n to len - 1)
  reverseFunc(arr, len - n, len - 1);

  return arr;
}
```

### 💡 Solution 5: Using Array.prototype.unshift

```javascript
function rotateLeftUnshift(arr, n) {
    n = n % arr.length;
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    return arr;
}
```

### 💡 Solution 6: Using Custom Helper Function

```javascript
function rotateLeftHelper(arr, n) {
    const rotate = (arr, n) => {
        n = n % arr.length;
        return arr.slice(n).concat(arr.slice(0, n));
    };
    return rotate(arr, n);
}
```

### 💡 Solution 7: Functional Programming Approach

```javascript
function rotateLeftFP(arr, n) {
  const len = arr.length;
  n = n % len; // Normalize n to handle cases where n > len

  if (n === 0) {
    // No rotation needed; return a copy to avoid modifying the original array
    return [...arr];
  }

  return arr.reduce((acc, _, i) => {
    acc[(i - n + len) % len] = arr[i];
    return acc;
  }, new Array(len));
}
```

### 💡 Solution 8: Using Array.prototype.splice

```javascript
function rotateLeftSplice(arr, n) {
    n = n % arr.length;
    let part1 = arr.splice(0, n);
    arr.push(...part1);
    return arr;
}
```

### 💡 Solution 9: Using Array.prototype.concat

```javascript
function rotateLeftConcat(arr, n) {
    n = n % arr.length;
    return arr.concat().splice(n).concat(arr.slice(0, n));
}
```