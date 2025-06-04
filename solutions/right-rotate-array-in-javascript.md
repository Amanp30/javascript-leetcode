# Right Rotate Array in JavaScript

## 📝 Problem

right Rotate Array in JavaScript


## 📌 Examples

### Example 1

**Input:** array = [1, 2, 3, 4, 5], position = 2  
**Output:** [4, 5, 1, 2, 3]

### Example 2

**Input:** array = ['a', 'b', 'c', 'd'], position = 3  
**Output:** ['b', 'c', 'd', 'a']

### Example 3

**Input:** array = ['b', 'c', 'd', 'a'], position = -4  
**Output:** ❌ Throw error => Shift amount must be non-negative.

---

## ✅ Solutions

### 💡 Solution 1: rotateArrayRight

```javascript
function rotateArrayRight(arr, k) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
  if (k < 0) {
    throw new Error("Shift amount must be non-negative.");
  }

  const len = arr.length;
  k = k % len;

  // Handle edge cases efficiently
  if (k === 0 || len === 0) {
    return arr;
  }

  // Use a more optimized approach for larger arrays
  if (len >= 2 * k) {
    const temp = arr.slice(len - k);
    arr.splice(len - k);
    arr.unshift(...temp);
  } else {
    // For smaller arrays, use the existing approach
    arr = arr.slice(-k).concat(arr.slice(0, -k));
  }

  return arr;
}
```

### 💡 Solution 2: FunctionalRotateRight:

```javascript
function functionalRotateRight(arr, k) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
  if (k < 0) {
    throw new Error("Shift amount must be non-negative.");
  }

  return arr.reduce((acc, val, i) => {
    const newIndex = (i + k) % arr.length;
    acc[newIndex] = val;
    return acc;
  }, []);
}
```

### 💡 Solution 3: ShiftArrayRight:

```javascript
function shiftArrayRight(arr, k) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
  if (k < 0) {
    throw new Error("Shift amount must be non-negative.");
  }

  const n = arr.length;
  k %= n;
  for (let i = 0; i < k; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
```